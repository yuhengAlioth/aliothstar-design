import "@aliothstar-design/theme/index.css";
import { makeInstaller } from "@aliothstar-design/utils";
import componens from "./componens";

const installer = makeInstaller(componens);

export * from "@aliothstar-design/components";
export default installer;
