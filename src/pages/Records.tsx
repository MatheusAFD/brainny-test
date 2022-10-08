import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";

import { useCreateRegisteredTimeMutation } from "../graphql/generated";
import { useRegisteredTimesUserByUserQuery } from "../graphql/generated";
import { CardList } from "../components/Dashboard/CardList";
import { SpanHead } from "../components/Dashboard/SpanHead";
import { ButtonRegister } from "../components/Landing/Button/ButtonRegister";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { ButtonMobile } from "../components/Landing/Button/ButtonMobile";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";
import { ModalDialog } from "../components/Modal/Modal";

export function Records() {
  const [loadingMutation, setLoadingMutation] = useState<boolean>();
  const { isOpen, onOpen, onClose } = useDisclosure();
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

      refetch({ id: userId });
      if (response) {
        onClose();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingMutation(false);
    }
  }

  return (
    <>
      <main className="bg-[#F2F2F2] min-h-screen">
        <Sidebar type="colaborator" />
        <HeaderMenu>
          <ButtonMobile
            text="Salvar"
            styleButton="primary"
            disabled={loadingMutation}
            onClick={handleCreateRegister}
          />
        </HeaderMenu>

        <div className="p-2 sm:p-4 flex flex-col items-start ml-0 md:ml-48 ">
          <div className="mt-3">
            <ButtonRegister
              size="lg"
              styleButton="secundary"
              text="Registrar ponto"
              resposive={true}
              onClick={onOpen}
            />
          </div>
          <div className="flex md:gap-36 flex-wrap justify-around md:justify-start p-2 lg:p-4 gap-4 md:mb-3 w-full">
            <SpanHead text="Colaborador" />
            <div className="flex gap-12 ">
              <SpanHead text="Data" />
              <SpanHead text="Hora" className="-mr-4 md:ml-40" />
            </div>
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
        <ModalDialog onOpen={onOpen} isOpen={isOpen} onClose={onClose}>
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
        </ModalDialog>
      </main>
    </>
  );
}
