import { ViewTransfers } from "../../components/ViewTransfers";
import { TransfersProviderDp } from "../../contexts/TransfersContextDp";
import { TransfersProvider } from "../../contexts/TransfersContextPix";

export function SearchTransfers() {
    return (
        <div>
            <TransfersProvider>
                <TransfersProviderDp>
                    <ViewTransfers />
                </TransfersProviderDp>
            </TransfersProvider>
        </div>
    );
}
