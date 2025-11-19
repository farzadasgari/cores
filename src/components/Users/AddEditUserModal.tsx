import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

interface AddEditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddEditUserModal = ({
    isOpen,
    onClose,
}: AddEditUserModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-hidden">
                <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                </DialogHeader>

                <form action="javascript:void(0)" className="space-y-4">
                    <div className="flex flex-col items-center gap-3">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src="/cores/avatar/avatar.webp" />
                            <AvatarFallback className="text-lg">
                                JD
                            </AvatarFallback>
                        </Avatar>
                        <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="cursor-pointer"
                        >
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Photo
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
