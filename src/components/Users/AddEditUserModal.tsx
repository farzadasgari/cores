import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { EyeClosed, Upload } from 'lucide-react';

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

                    <div className='space-y-2'>
                        <Label htmlFor='name'>Full Name *</Label>
                        <Input
                            id="name"
                            name='name'
                            placeholder='Enter full name'
                            required
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='email'>Email *</Label>
                        <Input
                            type='email'
                            id="email"
                            name='email'
                            placeholder='Enter email address'
                            required
                        />
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <Label>Role *</Label>
                            <Select required>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder="Select role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='Admin'>Admin</SelectItem>
                                    <SelectItem value='Editor'>Editor</SelectItem>
                                    <SelectItem value='Viewer'>Viewer</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='space-y-2'>
                            <Label>Status *</Label>
                            <Select required>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='Active'>Active</SelectItem>
                                    <SelectItem value='Inactive'>Inactive</SelectItem>
                                    <SelectItem value='Pending'>Pending</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='department'>Department *</Label>
                        <Input
                            id="department"
                            name='department'
                            placeholder='Enter department'
                            required
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='phone'>Phone</Label>
                        <Input
                            id="phone"
                            name='phone'
                            placeholder='Enter phone number'
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='employeeId'>Employee ID</Label>
                        <Input
                            id="employeeId"
                            name='employeeId'
                            placeholder='Enter Employee ID'
                        />
                    </div>

                    <div className='space-y-2'>
                        <Label htmlFor='password'>Password *</Label>
                        <div className='relative'>
                            <Input
                                type='password'
                                id="password"
                                name='password'
                                placeholder='Enter password'
                            />
                            <Button
                                type='button'
                                variant="ghost"
                                size="sm"
                                className='absolute right-2 top-1/2 transform -translate-y-1/2 h6 w-6 p-0'
                            >
                                <EyeClosed className="h-4 w-4 text-slate-800" />
                            </Button>
                        </div>
                    </div>

                </form>
            </DialogContent>
        </Dialog>
    );
};














