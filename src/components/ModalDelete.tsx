import React, { MouseEventHandler } from "react";
import BaseButton from "./form/BaseButton";

interface Props {
  show: boolean;
  onHide: MouseEventHandler<HTMLButtonElement>;
  functDelete?: MouseEventHandler<HTMLButtonElement>;
}
{
  /* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */
}

const ModalDelete = ({ show, onHide, functDelete }: Props) => {
  return show ? (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed  inset-0 z-50 bg-black bg-opacity-40 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl font-semibold">Hapus Data</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              // onClick={() => setShowModal(false)}
            >
              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-md ">
              Apakah kamu yakin ingin menghapus data ini?
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <BaseButton variant="white" className="mr-4" onClick={onHide}>
              Batal
            </BaseButton>
            <BaseButton variant="red" onClick={functDelete}>
              Hapus
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalDelete;
