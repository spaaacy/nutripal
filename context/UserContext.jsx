"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [session, setSession] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    if (!session) {
      fetchSession();
    } else if (window.location.pathname !== "/signup" && window.location.pathname !== "/signin") {
      if (session.data.session) {
        if (!dataLoaded) {
          setDataLoaded(true);
        }
      }
    }
  }, [session]);

  const fetchSession = async () => {
    const session = await supabase.auth.getSession();
    setSession(session);
  };

  return <UserContext.Provider value={{ session }}>{children}</UserContext.Provider>;
};
