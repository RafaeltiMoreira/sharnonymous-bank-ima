import { Routes, Route } from "react-router-dom";
import { Transfers } from "./pages/Transfers";
import { SearchTransfers } from "./pages/SearchTransfers";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>

            <Route path="/" element={<DefaultLayout />}>
                <Route path="/transfers" element={<Transfers />} />
                <Route path="/search" element={<SearchTransfers />} />
            </Route>

        </Routes>
    )
}