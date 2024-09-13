import globals from "globals";
import pluginJs from "@eslint/js";
import { rules } from "eslint-plugin-prettier";


export default [
  {languageOptions: { globals: globals.node },
},
  pluginJs.configs.recommended,
  

  
  

];