import { Button, Modal } from '@mantine/core';
import React from 'react';
import * as S from './styles';

type ModalDeleteProps = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
  onConfirm: () => void;
};

const ModalDelete = ({ openModal, setOpenModal, title, onConfirm, children }: ModalDeleteProps) => {
  return (
    <Modal
      opened={openModal}
      onClose={() => setOpenModal(false)}
      centered
      title={title}
      transitionProps={{ transition: 'fade', duration: 300, timingFunction: 'linear' }}
    >
      <S.ModalDeleteWrapper>
        {children}

        <div className="buttons">
          <Button onClick={() => setOpenModal(false)}>Cancelar</Button>
          <Button variant="outline" color="red" onClick={() => onConfirm()}>
            Confirmar
          </Button>
        </div>
      </S.ModalDeleteWrapper>
    </Modal>
  );
};
export default ModalDelete;
