import { useCallback, useRef, useState, useEffect } from "react";

const PasswordGenerator = () => {
  const [generatePassword, setGeneratePassword] = useState("");
  const [passwordLenght, setPasswordLenght] = useState(0);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isLowercase, setIsLowercase] = useState(false);
  const [isNumbers, setIsNumbers] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [message, setMessage] = useState("");
  const [textCopy, setTextCopy] = useState(false);
  const copyRef = useRef(null);
  const handlePassGenie = useCallback(() => {
    let pass = "";
    let str;
    if (isUppercase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isLowercase) str += "abcdefghijklmnopqrstuvwxyz";
    if (isNumbers) str += "1234567890";
    if (isSymbols) str += "~!@#$%^&*()+={}[]`";

    if (str?.length > 0) {
      for (let i = 1; i <= passwordLenght; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }
      setGeneratePassword(pass);
    }
  }, [
    isUppercase,
    isLowercase,
    isNumbers,
    isSymbols,
    passwordLenght,
    setGeneratePassword,
  ]);

  const isButtonDisabled =
    !isUppercase && !isLowercase && !isNumbers && !isSymbols;

  const handleClick = () => {
    if (passwordLenght === 0) {
      setMessage("Password length cannot be zero.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } else if (isButtonDisabled) {
      setMessage("Please select at least one option to generate a password.");
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    } else {
      handlePassGenie();
    }
  };
  const handleCopyPassword = useCallback(() => {
    if (copyRef.current) {
      setTextCopy(true);
      setTimeout(() => {
        setTextCopy(false);
      }, 2000);
    }

    window.navigator.clipboard.writeText(generatePassword);
  }, [generatePassword]);

  useEffect(() => {
    handlePassGenie();
  }, [setGeneratePassword, handlePassGenie]);
  return (
    <div
      className="relative flex items-center justify-center h-screen py-40 overflow-hidden bg-no-repeat bg-cover"
      style={{ backgroundImage: `url("./bg-1-BVx-W3eB.png")` }}
    >
      <div className="w-[480px] p-4 mx-auto bg-black rounded-3xl backdrop-blur-2xl">
        <div className="w-full rounded-[8px] bg-slate-800  text-white font-light text-lg  px-5 relative leading-[50px] h-14">
          <input
            ref={copyRef}
            value={generatePassword}
            type="text"
            className="bg-transparent text-sm focus:outline-0 w-full"
          />
          {textCopy && (
            <span className="absolute text-[12px] text-white bottom-[-13px] left-4 transition-all">
              copied
            </span>
          )}
          {generatePassword && (
            <span
              className="absolute text-sm text-white uppercase bottom-[0.60rem] right-[0.60rem] rounded-lg cursor-pointer bg-slate-900 py-2 px-4"
              onClick={handleCopyPassword}
            >
              Copy
            </span>
          )}
        </div>
        <div className="text-white text-[12px]  mt-4">
          <span className="text-slate-500">LENGTH :</span>
          <span>{passwordLenght}</span>
        </div>
        <div className="w-full rounded-[8px] bg-slate-800  text-white font-light text-lg p-3 flex gap-4">
          <span>0</span>
          <input
            type="range"
            min="0"
            value={passwordLenght}
            max="48"
            onChange={(e) => {
              setPasswordLenght(e.target.value);
            }}
            className="w-full"
          />
          <span>48</span>
        </div>
        <div className="text-white text-[12px]  mt-4">
          <span className="text-slate-500">SETTINGS</span>
        </div>
        <div className="w-full rounded-[8px] bg-slate-800  text-white font-light text-lg p-3 flex gap-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="uppercase"
              className="flex items-center justify-between w-full cursor-pointer"
            >
              <div className="font-medium text-white">Include Uppercase</div>
              <div className="relative">
                <input
                  id="uppercase"
                  type="checkbox"
                  defaultChecked={isUppercase}
                  onChange={() => {
                    setIsUppercase((prev) => !prev);
                  }}
                  className="absolute opacity-0"
                />

                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                <div className="absolute w-6 h-6 transition bg-white rounded-full shadow dot -left-1 -top-1"></div>
              </div>
            </label>
          </div>
        </div>
        <div className="w-full rounded-[8px] bg-slate-800  text-white font-light text-lg p-3 flex gap-4 mt-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="lowercase"
              className="flex items-center justify-between w-full cursor-pointer"
            >
              <div className="font-medium text-white">Include Lowercase</div>
              <div className="relative">
                <input
                  id="lowercase"
                  type="checkbox"
                  className="absolute opacity-0"
                  defaultChecked={isLowercase}
                  onChange={() => {
                    setIsLowercase((prev) => !prev);
                  }}
                />

                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                <div className="absolute w-6 h-6 transition bg-white rounded-full shadow dot -left-1 -top-1"></div>
              </div>
            </label>
          </div>
        </div>
        <div className="w-full rounded-[8px] bg-slate-800  text-white font-light text-lg p-3 flex gap-4 mt-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="numbers"
              className="flex items-center justify-between w-full cursor-pointer"
            >
              <div className="font-medium text-white">Include Numbers</div>
              <div className="relative">
                <input
                  id="numbers"
                  type="checkbox"
                  className="absolute opacity-0"
                  defaultChecked={isNumbers}
                  onChange={() => {
                    setIsNumbers((prev) => !prev);
                  }}
                />

                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                <div className="absolute w-6 h-6 transition bg-white rounded-full shadow dot -left-1 -top-1"></div>
              </div>
            </label>
          </div>
        </div>
        <div className="w-full rounded-[8px] bg-slate-800  text-white font-light text-lg p-3 flex gap-4 mt-4">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="symbols"
              className="flex items-center justify-between w-full cursor-pointer"
            >
              <div className="font-medium text-white">Include Symbols</div>
              <div className="relative">
                <input
                  id="symbols"
                  type="checkbox"
                  className="absolute opacity-0"
                  defaultChecked={isSymbols}
                  onChange={() => {
                    setIsSymbols((prev) => !prev);
                  }}
                />

                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

                <div className="absolute w-6 h-6 transition bg-white rounded-full shadow dot -left-1 -top-1"></div>
              </div>
            </label>
          </div>
        </div>
        <button
          className="mt-4 btn generate focus:outline-0"
          id="generate"
          onClick={handleClick}
        >
          Generate Password
        </button>

        {showMessage && (
          <p className="text-slate-500 text-[12px] mt-1   text-left">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
