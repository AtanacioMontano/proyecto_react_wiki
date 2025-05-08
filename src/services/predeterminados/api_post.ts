import jwtInterceptor from "../jwt.interceptor";

const DatosTabla = async (url: string, vDatos: any): Promise<string | any[]> => {
  // BenlarService.oBenlar.Alertas.mostrarLoad();
  const response = await jwtInterceptor
    .post(url, vDatos)
    .then((response: any) => {
      // BenlarService.oBenlar.Alertas.ocultarLoad();
      if (response.data.DatosTabla) {
        return JSON.stringify(response.data.DatosTabla);
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

const post_respuesta = async (url: string, vDatos: any): Promise<boolean> => {
  const response = await jwtInterceptor
    .post(url, vDatos)
    .then((response: any) => {
      console.log(response.data);
      if (response.data) {
        if (response.data.Mensaje && response.data.Mensaje !== "") {
          // BenlarService.oBenlar.show(
          //   response.data.Mensaje,
          //   response.data.EsValido
          //     ? BenlarService.oBenlar.Constantes().exito
          //     : BenlarService.oBenlar.Constantes().alerta
          // );
        }

        if (response.data.RespuestaArchivos) {
          if (response.data.RespuestaArchivos.Archivo != null) {
            // BenlarService.oBenlar.DescargarArchivotemp(
            //   response.data.RespuestaArchivos.Archivo
            // );
          }
        }
        return response.data.EsValido || false;
      } else {
        // BenlarService.oBenlar.show("Problema al proceso, intentelo nuevamente!!", BenlarService.oBenlar.Constantes().error)
        return false;
      }
    })
    .catch((err: any) => {
      console.log(err);
      return false;
    });
  return response;
};

export default { DatosTabla, post_respuesta };