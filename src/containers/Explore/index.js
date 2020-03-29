import React, { useState } from "react";
import useApiRequest from "../../hooks/useApiRequest";
import SearchBar from "../../components/SearchBar";
import TopList from "../../components/TopList";
import Artist from "../../components/Artist";
import Track from "../../components/Track";
import Page from "../../components/Page";
import Categories from "../../components/Categories";

const categories = [
  {
    name: "Top Artists",
    component: <Artist />,
    url: "/me/top/artists",
    img: ""
  },
  {
    name: "Top Tracks",
    component: <Track />,
    url: "/me/top/tracks",
    img: ""
  },
  {
    name: "Search",
    component: <Track />,
    url: "/search",
    img: ""
  }
];

const PARAMS = { limit: 50 };

//https://api.spotify.com/v1/search?query=Muse&type=track&offset=0&limit=50
const Explore = () => {
  const [searchParams, setSearchParams] = useState({
    query: "test",
    type: "track",
    limit: 50
  });
  const artistsReq = useApiRequest(categories[0].url, { limit: 50 });
  const tracksReq = useApiRequest(categories[1].url, { limit: 50 });
  const searchReq = useApiRequest("", searchParams, ({ tracks }) => tracks);
  const requests = [artistsReq, tracksReq, searchReq];
  const [selectedCategory, setSelectedCategory] = useState();
  const [title, setTitle] = useState("Explore");
  const imageSrc =
    "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  const selectCategory = categoryIndex => {
    if (categoryIndex !== undefined) {
      setTitle(categories[categoryIndex].name);
      setSelectedCategory(categoryIndex);
    } else {
      setTitle("Explore");
      setSelectedCategory(undefined);
    }
  };

  const handleSearch = text => {
    if (text) {
      setSearchParams({ ...searchParams, query: text });
      selectCategory(2);
    } else {
      selectCategory(undefined);
    }
  };

  return (
    <Page
      title={title}
      imageSrc={imageSrc}
      headerComponent={<SearchBar handleSearch={handleSearch} />}
    >
      {selectedCategory !== undefined ? (
        <TopList
          component={categories[selectedCategory].component}
          {...requests[selectedCategory]}
        />
      ) : (
        <Categories categories={categories} onClick={selectCategory} />
      )}
    </Page>
  );
};

export default Explore;
