import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";

import { useRegisteredTimesUserByUserQuery } from "../graphql/generated";
import { CardList } from "../components/Dashboard/CardList";
import { SpanHead } from "../components/Dashboard/SpanHead";
import { ButtonRegister } from "../components/Landing/Button/ButtonRegister";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { formatData } from "../utils/format-data";
import clock from "../assets/img/clock.png";

import { useCreateRegisteredTimeMutation } from "../graphql/generated";
import { useState } from "react";

export function Records() {
  const [loadingMutation, setLoadingMutation] = useState<boolean>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const date = new Date();
  const userId = String(localStorage.getItem("userId"));

  const [createRegisteredTime] = useCreateRegisteredTimeMutation();
  const { data, refetch } = useRegisteredTimesUserByUserQuery({
    variables: {
      id: userId,
    },
    context: {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    },
  });

  async function handleCreateRegister() {
    setLoadingMutation(true);
    try {
      const response = await createRegisteredTime({
        variables: {
          id: userId,
        },
        context: {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      });

      if (response) {
        onClose();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingMutation(false);
      refetch({ id: userId });
    }
  }

  return (
    <>
      <main className="bg-[#F2F2F2] w-full h-screen grid grid-cols-[auto_1fr] ">
        <Sidebar type="colaborator" />
        <div className="p-4 flex flex-col items-start">
          <div className="mt-3">
            <ButtonRegister
              size="lg"
              styleButton="secundary"
              text="Registrar ponto"
              onClick={onOpen}
            />
          </div>
          <div className="flex gap-36 mb-4 mt-10">
            <SpanHead text="Colaborador" />
            <SpanHead text="Data" />
            <SpanHead text="Hora" className="ml-12" />
          </div>

          {data?.registeredTimes?.map((colaborator) => {
            return (
              <CardList
                key={colaborator?.id}
                name={colaborator?.user?.name}
                id={colaborator?.id}
                date={colaborator?.created_at}
                hour={colaborator?.created_at}
              />
            );
          })}
        </div>
      </main>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
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
            <ButtonRegister
              size="md"
              disabled={loadingMutation}
              text="Bater ponto"
              styleButton="secundary"
              onClick={handleCreateRegister}
            />
            <ButtonRegister
              size="md"
              text="Cancelar"
              styleButton="primary"
              onClick={onClose}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
