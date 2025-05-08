// Estados de póliza
const constantesEstadoPoliza = {
    Anulada: {
      estadoCorto: 'A',
      estadoCompleto: 'Anulada'
    },
    Creada: {
      estadoCorto: 'C',
      estadoCompleto: 'Creada'
    },
    Emitida: {
      estadoCorto: 'E',
      estadoCompleto: 'Emitida'
    },
    Extinta: {
      estadoCorto: 'X',
      estadoCompleto: 'Extinta'
    },
    Recaudada: {
      estadoCorto: 'R',
      estadoCompleto: 'Recaudada'
    }
    // Consultar por el estado Enviada que está igual que el de Emitida
  }
  
  const constanteEtapaPagoPoliza = {
    Pago: {
      codigoCorto: "P",
      conceptoCompleto: "En Pago"
    },
    Diferida: {
      codigoCorto: "D",
      conceptoCompleto: "Pago Diferido"
    },
    Garantia: {
      codigoCorto: "G",
      conceptoCompleto: "Pago Garantía"
    },
    SinPago: {
      codigoCorto: "S",
      conceptoCompleto: "Sin Pago"
    }
  }
  const constanteTipoParametro = {
    FechasDePago: '6',
    TipoProceso: '5',
    MesProceso: '4',
    Fecha: '3',
    Numerico: '2',
    Texto: '1'
  }
  // Tipos de concepto
  const constanteTipoHyD = {
    TIPO_HABER_LEGAL: "1",
    TIPO_HABER_EXTRAORDINARIO: "2",
    TIPO_DESCUENTO_LEGAL: "3",
    TIPO_DESCUENTO_EXTRAORDINARIO: "4"
  }
  
  // Modalidad de renta
  const constanteModalidadRenta = {
    Simple: {
      codigoCorto: "S",
      conceptoCompleto: "Simple"
    },
    Garantizada: {
      codigoCorto: "G",
      conceptoCompleto: "Garantizada"
    },
    CoberturaAdicional: {
      codigoCorto: "A",
      conceptoCompleto: "Cobertura Adicional"
    },
    GarantizadaAdicional: {
      codigoCorto: "D",
      conceptoCompleto: "Garantizada Adicional"
    }
  }
  
  // Tipo de pensión
  // Preguntar si van todas
  const constanteTipoPension = {
  
    VejezAnticipada: {
      codigoCorto: "VA",
      conceptoCompleto: "Vejez Anticipada"
    },
    Vejez: {
      codigoCorto: "V",
      conceptoCompleto: "Vejez"
    },
    InvalidezTotal: {
      codigoCorto: "IT",
      conceptoCompleto: "Invalidez Total"
    },
    // Renta privada y privadas tienen la misma letra en VB6
    RentaPrivada: {
      codigoCorto: "P",
      conceptoCompleto: "Renta Privada",
      conceptoEquivalente: "Privadas"
    },
    PrivadasInvalidez: {
      codigoCorto: "PI",
      conceptoCompleto: "Privadas Invalidez"
    },
    PrivadaSobrevivencia: {
      codigoCorto: "PS",
      conceptoCompleto: "Privada Con Sobrevivencia"
    },
    SobrevivenciaPrivada: {
      codigoCorto: "OP",
      conceptoCompleto: "Sobrevivencia Privada"
    },
    PrivadaBomberos: {
      codigoCorto: "B",
      conceptoCompleto: "Privada Bomberos"
    }
  }
  //Pagos G.E.
  const constanteGarantia = {
    PAGO_GARANTIA_MENSUAL: "M",
    PAGO_GARANTIA_TOTAL: "T",
    PAGO_GARANTIA_MIXTO: "A"
  }
  
  
  const constanteFallecido = {
    Muerto: {
      valor: -1,
      conceptoCompleto: "Fallecido",
      conceptoBinario: "Si"
    },
    Vivo: {
      valor: 0,
      conceptoCompleto: "Vivo",
      conceptoBinario: "No"
    }
  }
  //ADM_TABLAS
  const constanteTablasADM = {
    MAESTRO_DE_AFP: "AFP",
    MAESTRO_BANCOS: "BANCOS",
    MAESTRO_CAJAS_DE_COMPENSACION: "CAJAS_COMPENSACION",
    MAESTRO_CAUSALES_TERMINO: "CAUSALES",
    MAESTRO_CAUSALES_APROBACION: "CAUSALES_APROBACION",
    MAESTRO_CAUSALES_FALLECIMIENTO: "CAUSALES_FALLECIMIENTO",
    MAESTRO_CAUSALES_INVALIDEZ: "CAUSALES_INVALIDEZ",
    MAESTRO_CAUSALES_SUSPENSION: "CAUSALES_SUSPENSION",
    MAESTRO_CENTRO_COSTO: "CENTRO_COSTO",
    MAESTRO_DE_CIUDADES: "CIUDADES",
    MAESTRO_CLASIFICACION_CORREDORES: "CLASIFICACION_CORREDORES",
    MAESTRO_CLASIFICACION_COTIZANTES: "CLASIFICACION_COTIZANTES",
    MAESTRO_DE_DESISTIMIENTO_APS: "CODIGOS_DESIST_APS",
    MAESTRO_DE_EXTINCION_SIAGF: "CODIGOS_EXT_SIAGF",
    MAESTRO_COMPANIAS: "COMPANIAS_SEGURO",
    MAESTRO_DE_COMUNAS: "COMUNAS",
    MAESTRO_COMUNAS_SINIM: "COMUNAS_SINIM",
    MAESTRO_DESCUENTOS_CCAF: "DESCUENTOS_CAJAS",
    MAESTRO_DOCUMENTOS: "DOCUMENTOS",
    MAESTRO_HABERES_Y_DESCUENTOS: "HABERES_DESCUENTOS",
    MAESTRO_INST_EDUC: "INSTIT_EDUCACION",
    MAESTRO_ISAPRES: "ISAPRES",
    MAESTRO_LEYES_ANTIGUO_REGIMEN: "LEYES_ANTIGUO_REGIMEN",
    MAESTRO_MENSAJES: "MENSAJES",
    MAESTRO_MONEDAS: "MONEDAS",
    MAESTRO_OBSERVACIONES: "OBSERVACIONES",
    MAESTRO_OFICINAS: "OFICINAS",
    MAESTRO_PARENTESCOS: "OTROS_PARENTESCOS",
    MAESTRO_DE_PRESTAMOS: "PRESTAMOS",
    MAESTRO_REGIONES_PAIS: "REGIONES",
    MAESTRO_RESOLUCIONES: "RESOLUCIONES",
    MAESTRO_DE_SEGUROS: "SEGUROS",
    MAESTRO_TRAMITES_DE_GE: "TRAMITES_GE",
    MAESTRO_VIAS_DE_PAGO: "VIAS_PAGO",
    MAESTRO_DE_ZONAS: "ZONAS",
    MAESTRO_ZONAS_DE_IMPUESTO: "ZONAS_IMPUESTO",
  
  }
  
  //Pagos G.E.
  const constanteTipoPersona = {
    TIPO_RENTISTA : "0",
    TIPO_BENEFICIARIO : "1",
    TIPO_TUTOR : "2",
    TIPO_RETENCION : "3",
    TIPO_GARANTIA : "4",
    TIPO_DESIGNADO : "5"
  }
  
  export {
    constantesEstadoPoliza,
    constanteEtapaPagoPoliza,
    constanteGarantia,
    constanteTipoParametro,
    constanteFallecido,
    constanteTipoPension,
    constanteModalidadRenta,
    constanteTablasADM,
    constanteTipoHyD,
    constanteTipoPersona
  }
  