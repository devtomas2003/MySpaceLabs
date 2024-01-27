import { NativeRouter, Route, Routes } from "react-router-native";

import AuthOptions from "./Views/AuthOptions";
import CreateID from "./Views/CreateID";

export default function Router(){
    return(
        <NativeRouter>
            <Routes>
                <Route path="/" element={<AuthOptions />} />
                <Route path="/create-id" element={<CreateID />} />
            </Routes>
        </NativeRouter>
    );
}