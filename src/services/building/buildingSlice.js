import { createSlice } from "@reduxjs/toolkit";


const buildingSlice = createSlice({
    name: 'building',
    initialState: {
        buildingName: '',
        buildingType: '',
        location: '',
        area:'',
        totalFloors:'',
        totalRestrooms:'',
        buildingManager: '',
        phone:'',
        // images:[],
    },
    reducers:{
        setBuilding: (state, action) => {
            const {
                buildingName,
                buildingType,
                location,
                area,
                totalFloors,
                totalRestrooms,
                buildingManager,
                phone,
            } = action.payload;
            state.buildingName = buildingName || state.buildingName;
            state.buildingType = buildingType || state.buildingType;
            state.location = location || state.location;
            state.area = area || state.area;
            state.totalFloors = totalFloors || state.totalFloors;
            state.totalRestrooms = totalRestrooms || state.totalRestrooms;
            state.buildingManager = buildingManager || state.buildingManager;
            state.phone = phone || state.phone;
        }
    }
})

export const {setBuilding} = buildingSlice.actions;
export default buildingSlice;