import FiltersReducer from '../reducers/filters_reducer';
import GeoReducer from '../reducers/geolocation_reducer';
import DatesReducer from '../reducers/dates_reducer';
import ModalReducer from '../reducers/modal_reducer';

describe('UI Reducers', () => {
  describe('FiltersReducer', () => {
    const defaultFilters = {
      pets: false,
      camping: false,
      glamping: false,
      group: false,
      pricing: 10000,
      biking: false,
      hiking: false,
      water: false,
      forest: false,
      waterfall: false,
      lake: false,
      public: false,
      private: false,
    }


    it('exports a function', () => {
      expect(typeof FiltersReducer).toEqual('function');
    });

    it('should initialize with defaultFilters statuses', () => {
      expect(FiltersReducer(undefined, {})).toEqual(defaultFilters);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = FiltersReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });


    describe('handles the RECEIVE_SINGLE_FILTER action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'RECEIVE_SINGLE_FILTER',
          filter: 'pets'
        };
      });

      it('should toggle filter category to true', () => {
        const state = FiltersReducer(undefined, action);
        expect(state.pets).toEqual(true);
      });
    });

    describe('handles the REMOVE_SINGLE_FILTER action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'REMOVE_SINGLE_FILTER',
          filter: 'pets'
        };
      });

      it('should toggle filter category to false', () => {
        const state = FiltersReducer(undefined, action);
        expect(state.pets).toEqual(false);
      });
    });

    describe('handles the RECEIVE_PRICING_FILTER action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'RECEIVE_PRICING_FILTER',
          amount: 50
        };
      });

      it('should update pricing filter to action amount', () => {
        const state = FiltersReducer(undefined, action);
        expect(state.pricing).toEqual(50);
      });
    });

    describe('handles the REMOVE_PRICING_FILTER action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'REMOVE_PRICING_FILTER',
        };
      });

      it('should update pricing filter to default 10000', () => {
        const state = FiltersReducer(undefined, action);
        expect(state.pricing).toEqual(10000);
      });
    });

    describe('handles the CLEAR_ALL_FILTERS action', () => {
      let action;

      beforeEach(() => {
        action = {
          type: 'CLEAR_ALL_FILTERS',
        };
      });

      it('should restore all filters to default', () => {
        const state = FiltersReducer(undefined, action);
        expect(state).toEqual(defaultFilters);
      });
    });
  });

  describe('Geolocation Reducer', () => {
    const defaultState = {
      geolocation: {},
      mapBounds: {},
    }

    it('exports a function', () => {
      expect(typeof GeoReducer).toEqual('function');
    });

    it('should initialize with an empty geolocation and mapBounds objects', () => {
      expect(GeoReducer(undefined, {})).toEqual(defaultState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = GeoReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handles the RECEIVE_GEOLOCATION_ENTRY action', () => {
      let action,
        geolocationEntry;

      beforeEach(() => {
        geolocationEntry = "San Francisco";
        action = {
          type: 'RECEIVE_GEOLOCATION_ENTRY',
          geolocation: geolocationEntry
        };
      });

      it('should return the geolocation entry entered by user', () => {
        const state = GeoReducer(undefined, action);
        expect(state.geolocation).toEqual(geolocationEntry);
      });
    });

    describe('handles the RECEIVE_MAP_BOUNDS action', () => {
      let action,
        mapBoundaries;

      beforeEach(() => {
        mapBoundaries = {
          b:
            {
              b: -122.83467800053711, f: -121.70754939946289
            },
          f:
          {
            b: 36.136978491308625, f: 39.434938164921306
          }
        };

        action = {
          type: 'RECEIVE_MAP_BOUNDS',
          mapBounds: mapBoundaries
        };
      });

      it('should return mapBounds provided by Google Maps bounding rectangle', () => {
        const state = GeoReducer(undefined, action);
        expect(state.mapBounds).toEqual(mapBoundaries);
      });
    });
  });

  describe('Dates Reducer', () => {
    const defaultState = {
      checkIn: '',
      checkOut: '',
    }

    it('exports a function', () => {
      expect(typeof DatesReducer).toEqual('function');
    });

    it('should initialize with an blank checkIn and checkOut', () => {
      expect(DatesReducer(undefined, {})).toEqual(defaultState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = DatesReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handles the RECEIVE_SEARCH_DATES action', () => {
      let action,
        searchDates;

      beforeEach(() => {
        searchDates = {
          checkIn: "Tue Jun 19 2018 12:00:00 GMT-0700 (PDT)",
          checkOut: "Tue Jun 22 2018 12:00:00 GMT-0700 (PDT)"
        };

        action = {
          type: 'RECEIVE_SEARCH_DATES',
          dates: searchDates
        };
      });

      it('should return the search dates entered by user', () => {
        const state = DatesReducer(undefined, action);
        expect(state).toEqual(searchDates);
      });
    });
  });

  describe('Modal Reducer', () => {
    const initialModalState = {
      modalType: null
    };

    it('exports a function', () => {
      expect(typeof ModalReducer).toEqual('function');
    });

    it('should initialize modalType as null', () => {
      expect(ModalReducer(undefined, {})).toEqual(initialModalState);
    });

    it('should return the previous state if an action is not matched', () => {
      const oldState = { 1: 'oldState' };
      const newState = ModalReducer(oldState, { type: 'unmatchedtype' });
      expect(newState).toEqual(oldState);
    });

    describe('handles the SHOW_MODAL action', () => {
      let action,
        modalCategory;

      beforeEach(() => {
        modalCategory = 'login';

        action = {
          type: 'SHOW_MODAL',
          modalType: modalCategory
        };
      });

      it('should update modal type to action modalType', () => {
        const state = ModalReducer(undefined, action);
        expect(state).toEqual(modalCategory);
      });
    });

    describe('handles the HIDE_MODAL action', () => {
      let action,
        modalCategory;

      beforeEach(() => {
        action = {
          type: 'HIDE_MODAL',
        };
      });

      it('should update modal type to null', () => {
        const state = ModalReducer('login', action);
        expect(state).toEqual(initialModalState);
      });
    });
  });
});
