import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Original001() {
    const data = [
        {
            id: '1',
            title: 'ชีวิตใหม่ในตระกูลมือสังหาร',
            category: 'โรแมนซ์แฟนตาซี',
            image: 'https://swebtoon-phinf.pstatic.net/20240620_239/1718868064834to0Pv_JPEG/6EpisodeList_Mobile.jpg?type=crop540_540',
            likes: 81373
        },
        {
            id: '2',
            title: 'Jungle Juice',
            category: 'แฟนตาซี',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbhMgiwZhPWlkf6W4Ww2thPNov1XqSoPv2g&s',
            likes: 875601
        },
        {
            id: '3',
            title: 'เป็นโซ่มือสองของฉัน',
            category: 'โรแมนซ์',
            image: 'https://swebtoon-phinf.pstatic.net/20221217_1/16712568041165c7Vi_JPEG/thumbnail.jpg',
            likes: 63301
        },
        {
            id: '4',
            title: 'เปลี่ยนเลขาให้มาเป็นแฟน',
            category: 'โรแมนซ์',
            image: 'https://pbs.twimg.com/media/GRTgqkBaEAA9JJp.jpg',
            likes: 6691
        },
        {
            id: '5',
            title: 'แบคXX',
            category: 'แอคชัน',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yb8FWcFObjiJP2hGKQRL-wBjC8xRDKyHtQ&s',
            likes: 257003
        },
        {
            id: '6',
            title: 'นางร้ายจากคืนนั้น',
            category: 'โรแมนซ์แฟนตาซี',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyePg872R2NohQF6BFRUxcR4FVe5fVePankw&s',
            likes: 28506
        }
    ];
    
    const BookItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.likes}>💚 {item.likes.toLocaleString()}</Text>
            </View>
        </TouchableOpacity>
    );
    
    
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={BookItem}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    columnWrapperStyle={styles.row}
                    ListHeaderComponent={() => (
                        <View style={styles.header}>
                            <Text style={styles.headerText}>ประจำวัน</Text>
                            <Text style={styles.subHeaderText}>ประเภท</Text>
                        </View>
                    )}
                />
            </View>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingHorizontal: 10,
    },
    row: {
        justifyContent: 'space-between',
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        backgroundColor: '#1e1e1e',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 150,
    },
    textContainer: {
        padding: 5,
    },
    category: {
        color: '#b3b3b3',
        fontSize: 12,
    },
    title: {
        color: '#fff',
        fontSize: 14,
        marginTop: 2,
    },
    likes: {
        color: '#66FF66',
        fontSize: 12,
        marginTop: 5,
    },
    header: {
        padding: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subHeaderText: {
        color: '#b3b3b3',
        fontSize: 14,
        marginTop: 5,
    },
});
