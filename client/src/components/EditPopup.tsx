import React from "react";
import { Button } from "react-bootstrap";

type editTypes = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const EditPopup: React.FC<editTypes> = ({ open, onClose, children }) => {
    return (
        <div style={{
            position: 'fixed',
            inset: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s',
            visibility: open ? 'visible' : 'hidden',
            backgroundColor: open ? 'rgba(0, 0, 0, 0.2)' : 'transparent'
        }} onClick={onClose}>
            <div
                style={{
                    position: 'relative',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    padding: '24px',
                    transition: 'transform 0.3s, opacity 0.3s',
                    maxWidth: '500px',
                    transform: open ? 'scale(1)' : 'scale(1.1)',
                    opacity: open ? '1' : '0'
                }}
                onClick={(e) => e.stopPropagation()}>
                <Button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    X
                </Button>
                {children}
            </div>
        </div>
    )
};
export default EditPopup;
