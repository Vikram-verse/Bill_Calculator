import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView } from "react-native";

const getSatisfactionColor = (satisfaction) => {
  const satisfactionValue = parseInt(satisfaction);
  if (satisfactionValue >= 20) {
    return '#8ef6e4';
  } else if (satisfactionValue >= 10) {
    return '#9896f1';
  } else if (satisfactionValue >= 5) {
    return '#d59bf6';
  } else if (satisfactionValue >= 0) {
    return '#ff7e67';
  } else {
    return '#ffffff';
  }
};

const BillForm = () => {

  const [billData, setBillData] = useState([]);

  useEffect(() => {
    fetchBill()
  }, [])

  const fetchBill = async () => {
    const response = await fetch('https://666feaf80900b5f87248a96d.mockapi.io/billManage/getbill');
    const data = await response.json();
    setBillData(data);
  }

  return (
    <ScrollView>
      <FlatList
        data={billData}
        renderItem={(item, index) => (
          <View>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.billAmount}</Text>
            <Text style={styles.cell}>{item.tipPercentage}</Text>
            <Text style={styles.cell}>{item.totalAmount}</Text>
          </View>
        )}
        keyExtractor={(item, index) => {
          console.log(index)
          return item.name + index.toString
        }}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>Bill Data</Text>
        <View style={styles.row}>
          <Text style={styles.tableHeading}>Name</Text>
          <Text style={styles.tableHeading}>Bill Amount</Text>
          <Text style={styles.tableHeading}>Tip Percentage</Text>
          <Text style={styles.tableHeading}>Total Amount</Text>
        </View>
        <SafeAreaView style={styles.table}>

          {/* {billData.map((item, index) => (
            <View key={index} style={[styles.row, { backgroundColor: getSatisfactionColor(item.tipPercentage) }]}>
              <Text style={styles.cell}>{item.name}</Text>
              <Text style={styles.cell}>{item.billAmount}</Text>
              <Text style={styles.cell}>{item.tipPercentage}</Text>
              <Text style={styles.cell}>{item.totalAmount}</Text>
            </View>
          ))} */}
        </SafeAreaView>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    width: '100%',
    borderWidText: 2,
    borderColor: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidText: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  tableHeading: {
    flex: 1,
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold'
  }
})

export default BillForm;


// export default function App() {
//   return (
//     <View style={[Styles.viewStyle,Styles.customStyle]}>
//       <Text style={Styles.textStyle}>Mahakal ki Jai</Text>
//     </View>
//   )
// }

// const Styles = StyleSheet.create({
// viewStyle:{
//   padding:'auto',
//   margin:'auto'
// },
// textStyle:{
//   fontSize:32,
//   color:'red',
// },
// customStyle:{
//   backgroundColor:'gray'
// }
// })