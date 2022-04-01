import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import ExpensesItem from "./ExpensesItem";

const renderExpensesItem = (itemData) => {
  return <ExpensesItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;

const styles = StyleSheet.create({});
