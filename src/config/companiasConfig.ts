const enum Companias {
    BICE            = "50072844",
    SECURITY        = "37059312",
    BENLAR          = "00000000",
    METLIFE         = "43028387",
};

const TemasTailwind: Record<Companias, string> = {
    [Companias.BICE]:       "bicevida",
    [Companias.SECURITY]:   "security",
    [Companias.BENLAR]:     "benlar", 
    [Companias.METLIFE]:    "metlife",
}

export { Companias, TemasTailwind };