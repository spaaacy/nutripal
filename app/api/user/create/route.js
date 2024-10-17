import { supabase } from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';

export async function POST(req, res) {
  try {
    // Step 1: Parse the user and food input from the request body
    const { user, foodName } = await req.json(); // Assuming the request body contains user data and food name

    // Step 2: Fetch the FatSecret OAuth 2.0 token
    const clientId = process.env.FATSECRET_CLIENT_ID;
    const clientSecret = process.env.FATSECRET_CLIENT_SECRET;
    const tokenUrl = 'https://oauth.fatsecret.com/connect/token';

    const tokenResponse = await axios.post(
      tokenUrl,
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    // Extract the access token
    const accessToken = tokenResponse.data.access_token;

    // Step 3: Fetch food data based on the user's input from the FatSecret API
    const foodResponse = await axios.get('https://platform.fatsecret.com/rest/server.api', {
      params: {
        method: 'foods.search',
        format: 'json',
        search_expression: foodName,  // User input determines the food being searched
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Extract relevant food data from the response (for example purposes, we'll just log it)
    const foodData = foodResponse.data;
    console.log('Food Data:', foodData);

    // Step 4: Store the user data along with the food data into Supabase
    const { error } = await supabase.from("user").insert({
      ...user,
      food_data: foodData, // Storing the food data with the user data
    });
    if (error) throw error;

    // Step 5: Return a success response with the user and food data
    return NextResponse.json({ message: "User created successfully!", foodData }, { status: 201 });

  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
