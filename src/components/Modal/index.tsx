import React, {ReactElement} from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import {useStylesSignIn} from "../../pages/SignIn";

interface ModalProps {
    title: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    open?: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
                                                title,
                                                children,
                                                open = false,
                                                onClose
                                            }: ModalProps): ReactElement | null => {
    if (!open) {
        return null;
    }
    return (
        <div>
            <Dialog open={open} onClose={onClose} aria-label="close">
                <DialogTitle id="form-dialog-title">
                    <IconButton
                        onClick={onClose}
                        color="secondary"
                        aria-label="close">
                        <CloseIcon style={{fontSize: 26}}/>
                    </IconButton>
                    {title}
                </DialogTitle>
                <DialogContent>{children}</DialogContent>
            </Dialog>
        </div>
    );
};