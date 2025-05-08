import jwtInterceptor from "../jwt.interceptor"

const DatosComunas = async (params: Record<string, any>): Promise<any[]> => {
  const url = "api_polizas/NuevosNegocios/ObtenerComuna";

  // BenlarService.oBenlar.Alertas.mostrarLoad();
  const response = await jwtInterceptor
    .get(url, { params })
    .then((response: any) => {
      // BenlarService.oBenlar.Alertas.ocultarLoad();
      if (response.data.EsValido) {
        return response.data.Comunas || [];
      } else {
        return [];
      }
    })
    .catch((err: any) => {
      // BenlarService.oBenlar.Alertas.ocultarLoad();
      console.log(err);
      return [];
    });
  return response;
};

const DatosFechasPago = async (params: Record<string, any>): Promise<any[]> => {
  const url = "api_pensiones/ArchivosBancarios/ObtenerFechasPago";

  // BenlarService.oBenlar.Alertas.mostrarLoad();
  const response = await jwtInterceptor
    .get(url, { params })
    .then((response: any) => {
      // BenlarService.oBenlar.Alertas.ocultarLoad();
      if (response.data.EsValido) {
        return response.data.oFechasPago || [];
      } else {
        return [];
      }
    })
    .catch((err: any) => {
      // BenlarService.oBenlar.Alertas.ocultarLoad();
      console.log(err);
      return [];
    });
  return response;
};

export default {
  DatosComunas,
  DatosFechasPago,
};