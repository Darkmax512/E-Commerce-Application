import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { adminActions } from "../../../store/adminSlice";

const people = [{ name: "ACTIVE" }, { name: "BANED" }, { name: "SUSPENDED" }];
export default function OrderDropdown({ user }) {
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    axios
      .patch(
        `http://localhost:5000/api/v1/users/${user._id}`,
        { status: e.name },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        toast.success("User Status Has Been Changed!", {
          autoClose: 1000,
        });
        dispatch(adminActions.updateUser(res.data));
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        toast.error("Somthing Went Wrong!", { autoClose: 1000 });
      });
  };
  return (
    <div className="w-full">
      <Listbox value={user?.status} onChange={submitHandler}>
        <div className="relative ">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-green-300 py-[6px] pl-3 pr-10 text-left focus:outline-none  sm:text-sm">
            <span className="block ">{user?.status}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 ${
                      active ? "bg-slate-100 text-black/90" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block  ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 hidden pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
