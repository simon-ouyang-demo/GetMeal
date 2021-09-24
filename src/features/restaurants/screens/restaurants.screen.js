import React from "react";
import styled from "styled-components/native"
import { Searchbar } from "react-native-paper";
import { StatusBar, SafeAreaView, FlatList } from "react-native";

import RestaurantInfoCard from "../components/restaurant-info.component";
import Spacer from "../../../components/spacer/spacer.component"

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`

const RestaurantList = styled.FlatList`
    padding: ${(props) => props.theme.space[3]};
`

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: '1', id: 1 },
        { name: '2', id: 2 },
        { name: '3' , id: 3},
        { name: '4', id: 4 },
        { name: '5', id: 5 }
      ]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
          </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);