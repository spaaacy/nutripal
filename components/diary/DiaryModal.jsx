import AntDesign from '@expo/vector-icons/AntDesign';
const DiaryModal = () => {


    return (
        <div style = {styles.container}>
            <div
                style = {{
                    backgroundColor: 'gainsboro',
                    padding: 10,
                    borderRadius: 5,
                    gap: 5,
                    flexDirection: 'row',
                }}
            >
                <div>
                    <span style = {{fontWeight: 'bold', fontSize: 16}} >Pizza</span>
                    <p style = {{color: 'dimgray' }}>350 Cal, Dominos</p>
                </div>
                <AntDesign name="pluscircleo" size={24} color="black" />
            </div>
        </div>
    );
};

export default DiaryModal;
