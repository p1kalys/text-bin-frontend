// Header.tsx
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { FiMoon, FiSun, FiCode, FiSettings } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { editorThemes, EditorThemeName } from "@/lib/constants";
import Tooltip from "./Tooltip";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  highlightSyntax: boolean;
  setHighlightSyntax: (value: boolean) => void;
  editorTheme: EditorThemeName;
  setEditorTheme: (theme: EditorThemeName) => void;
}

function Header({
  darkMode,
  setDarkMode,
  highlightSyntax,
  setHighlightSyntax,
  editorTheme,
  setEditorTheme,
}: HeaderProps) {
  return (
    <header
      className={`p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-4xl font-bold cursor-pointer hover:text-blue-500 transition duration-300"
          data-tooltip-id="home-tooltip"
        >
          TEXT BIN
        </Link>
        <Tooltip id="home-tooltip" content="Go to homepage" />

        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
              id="dark-mode"
              className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-200"
            />
            <Label
              htmlFor="dark-mode"
              className="flex items-center"
              data-tooltip-id="dark-mode-tooltip"
            >
              {darkMode ? (
                <FiMoon className="mr-2" />
              ) : (
                <FiSun className="mr-2" />
              )}
              {darkMode ? "Dark Mode" : "Light Mode"}
            </Label>
            <Tooltip id="dark-mode-tooltip" content="Toggle dark mode" />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              checked={highlightSyntax}
              onCheckedChange={setHighlightSyntax}
              id="highlight-syntax"
              className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200"
            />
            <Label htmlFor="highlight-syntax" className="flex items-center" data-tooltip-id="toggle-syntax-tooltip">
              <FiCode className="mr-2" />
              Syntax Highlighting
            </Label>
            <Tooltip id="toggle-syntax-tooltip" content="Toggle Syntax Highlighting" />
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={editorTheme}
              onChange={(e) =>
                setEditorTheme(e.target.value as EditorThemeName)
              }
              className={`${
                darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
              } border rounded p-1`}
            >
              {Object.entries(editorThemes).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
            <Label className="flex items-center">
              <FiSettings className="mr-2" />
              Editor Theme
            </Label>
          </div>
          <Link
            href="https://github.com/The-Enthusiast-404/text-bin-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center  transition ease-in-out transform hover:scale-105 duration-300"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
