import { ArrowUpToLine } from "lucide-react";
import { Button } from "../ui/button";

export const ScrollToTop = ({ className }) => {
    const scrollTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={scrollTop}
            className={className}
        >
            <ArrowUpToLine size={16} />
        </Button>
    );
};
