import { ApplicationAction } from "@/store/actions";
import { ApplicationState } from "@/store/types/state";

export interface ProductDetailProps {
    state: ApplicationState,
    dispatch?: React.Dispatch<ApplicationAction>;
    ctx?: React.Context<ApplicationState>;
}
