import homePageCollectionsActionTypes from "./homePageCollections.types";

const initialState = {
  mainImage: {
    img: "",
    text1: "",
    text2: ""
  },
  itemsRow: {
    title: "",
    body: [],
  },
  banner: {
    title: "",
    body: [],
    imgMobile: "",
  },
  bannerGrid: {
    title: "",
    body: [],
  },
  loading: false,
  error: null,
};

const fetchHomePageCollectionsSuccess = (state, payload) => {
  return {
    ...state,
    loading: payload.loading,
    itemsRow: payload.data["itemsRow"],
    banner: payload.data["banner"],
    bannerGrid: payload.data["bannerGrid"],
    mainImage: payload.data["mainImage"],
  };
};

const fetchHomePageCollectionsStart = (state, payload) => {
  return {
    ...state,
    loading: payload.loading,
    error: payload.error,
  };
};

const fetchHomePageCollectionsFailure = (state, payload) => {
  return {
    ...state,
    loading: payload.loading,
    error: payload.error,
  };
};

const homePageCollectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case homePageCollectionsActionTypes.FETCH_HOME_PAGE_COLLECTIONS_START:
      return fetchHomePageCollectionsStart(state, action.payload);
    case homePageCollectionsActionTypes.FETCH_HOME_PAGE_COLLECTIONS_SUCCESS:
      return fetchHomePageCollectionsSuccess(state, action.payload);
    case homePageCollectionsActionTypes.FETCH_HOME_PAGE_COLLECTIONS_FAILURE:
      return fetchHomePageCollectionsFailure(state, action.payload);
    default:
      return state;
  }
};

export default homePageCollectionsReducer;
