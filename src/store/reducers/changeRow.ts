import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Entity } from '../../models/Entity';
import { Row } from '../../models/Row';
import axios from 'axios';

interface AuthState {
  data: Row;
}

interface eID {
  id: Entity;
}

const initialState: AuthState = {
  data: {
    equipmentCosts: 0,
    estimatedProfit: 0,
    id: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: '',
    salary: 0,
    supportCosts: 0,
    total: 0
  },
};

export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getId(state, action: PayloadAction<number>) {
      state.data.id = action.payload
    },

    createRow(state, action: PayloadAction<Row>) {
      state.data = initialState.data;
      axios.post(`http://185.244.172.108:8081/v1/outlay-rows/entity/{eID}/row/create`)
    },

    updateRow(state, action: PayloadAction<Row>) {
      axios.post(`http://185.244.172.108:8081/v1/outlay-rows/entity/{rID}/row/list`)
    },

    deleteRow(state, action: PayloadAction<Row>) {
      axios.delete(`http://185.244.172.108:8081//v1/outlay-rows/entity/{eID}/row/{rID}/delete`)
    }
  }
});

export default AuthSlice.reducer;
