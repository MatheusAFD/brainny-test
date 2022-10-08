import { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalFooter,
} from "@chakra-ui/react";

import { formatData } from "../../utils/format-data";
import clock from "../../assets/img/clock.png";

interface Modal {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function ModalDialog(props: Modal) {
  const date = new Date();

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
      <ModalOverlay backdropFilter="auto" backdropBlur="2px" />
      <ModalContent w="400px">
        <ModalHeader
          color="#20292E"
          fontWeight="bold"
          fontSize={20}
          textAlign="center"
          mt="44px"
        >
          Registrar novo ponto
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <div className="mt-4">
            <img src={clock} />
            <p className="font-bold text-principal-900 text-3xl mt-[10px] text-center">
              {formatData(date, "kk':'mm")}
            </p>
            <span className="text-principal-900/50 mt-2 text-center">
              {formatData(date, "dd'/'MM'/'yyyy")}
            </span>
          </div>
        </ModalBody>

        <ModalFooter display={"flex"} flexDirection="column" mb="48px">
          {props.children}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
