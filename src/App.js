
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import store from './pages/Store';
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import HotelDetails from './components/HotelDetails';
import RoomDetails from './components/Roomdetails';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <Routes>
                <Route
                    path="/loginPage"
                    element={
                        <PrivateRouteForLogin>
                            <LoginPage />
                        </PrivateRouteForLogin>
                    }
                />
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>
                    }
                />
                <Route
                   path="/hotels/:hotelId"
                   element={<HotelDetails />}
                 />
                 <Route
                  path="/hotels/:hotelId/rooms/:roomId"
                   element={<RoomDetails />} />
            </Routes>
        </BrowserRouter>
        </Provider>
    );
};

export default App;

const PrivateRoute = ({ children }) => {
    const authToken = localStorage.getItem("authToken");
    if(authToken) {
        return children;
    }
    else {
        return <Navigate to={"/loginPage"} />;
    }
};

const PrivateRouteForLogin = ({ children }) => {
    const authToken = localStorage.getItem("authToken");
    if(!authToken) {
        return children;
    }
    else {
        return <Navigate to={"/"} />;
    }
};