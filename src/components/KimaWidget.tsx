import {
  KimaTransactionWidget,
  KimaProvider,
  FontSizeOptions,
  ModeOptions,
  ColorModeOptions,
} from "@kimafinance/kima-transaction-widget";
import "@kimafinance/kima-transaction-widget/dist/index.css";

const KimaWidget = () => {
  if (typeof window === "undefined") {
    globalThis.window.navigator = {} as unknown as Navigator;
  }

  return (
    <KimaProvider>
      <div style={{ margin: "0 5vw" }}>
        <div className="container">
          <KimaTransactionWidget
            theme={{
              colorMode: ColorModeOptions.light,
              fontSize: FontSizeOptions.medium,
            }}
            mode={ModeOptions.bridge}
            kimaBackendUrl="http://localhost:3001"
            kimaNodeProviderQuery="https://api-staging.kima.finance"
            compliantOption={false}
            errorHandler={(e: unknown) => {
              console.log("error:", e);
            }}
            successHandler={() => {
              console.log("success");
            }}
            closeHandler={() => {
              console.log("closed");
            }}
          />
        </div>
      </div>
    </KimaProvider>
  );
};

export default KimaWidget;
