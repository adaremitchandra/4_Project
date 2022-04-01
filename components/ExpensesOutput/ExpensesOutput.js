import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A Pair Of Shoes",
    amount: 90000,
    date: new Date("2021-12-30"),
  },
  {
    id: "e2",
    description: "A Pair Of Shirt",
    amount: 200000,
    date: new Date("2022-02-12"),
  },
  {
    id: "e3",
    description: "Some Banana",
    amount: 20000,
    date: new Date("2022-03-30"),
  },
  {
    id: "e4",
    description: "Buku",
    amount: 50000,
    date: new Date("2022-02-12"),
  },
  {
    id: "e5",
    description: "Buku",
    amount: 40000,
    date: new Date("2022-02-12"),
  },
  {
    id: "e6",
    description: "A Pair Of Shoes",
    amount: 90000,
    date: new Date("2021-12-30"),
  },
  {
    id: "e7",
    description: "A Pair Of Shirt",
    amount: 200000,
    date: new Date("2022-02-12"),
  },
  {
    id: "e8",
    description: "Some Banana",
    amount: 20000,
    date: new Date("2022-03-30"),
  },
  {
    id: "e9",
    description: "Buku",
    amount: 50000,
    date: new Date("2022-02-12"),
  },
  {
    id: "e10",
    description: "Buku",
    amount: 40000,
    date: new Date("2022-02-12"),
  },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    flex: 1,
  },
});
