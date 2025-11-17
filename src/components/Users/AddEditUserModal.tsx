import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

interface AddEditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddEditUserModal = ({isOpen, onClose}: AddEditUserModalProps) => {
    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-hidden">
                <DialogHeader>
                    Header
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}