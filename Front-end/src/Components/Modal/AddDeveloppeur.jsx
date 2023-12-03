/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FormAddDeveloppeur from "../Form/FormAddDeveloppeur";

export default function AddDeveloppeur({
  isOpenAddDeveloppeur,
  setIsOpenAddDeveloppeur,
  CurrentDeveloppeur,
}) {
  return (
    <Transition appear show={isOpenAddDeveloppeur} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setIsOpenAddDeveloppeur}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <button
                type="button"
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setIsOpenAddDeveloppeur((prev) => !prev)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {CurrentDeveloppeur
                  ? "Modifiaction d'un developpeur."
                  : "Ajoute un developpeur."}
              </Dialog.Title>
              <FormAddDeveloppeur
                setIsOpenAddDeveloppeur={setIsOpenAddDeveloppeur}
                CurrentDeveloppeur={CurrentDeveloppeur}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
