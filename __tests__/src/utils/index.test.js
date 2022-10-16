import utils from "../../../src/utils";

describe("Utils", () => {
  describe("formatCep", () => {
    it("should return cep in format #####-###", () => {
      const resultado = utils.formatCep("09450000");
      expect(resultado).toEqual("09450-000");
    });
  });
  describe("formatDate", () => {
    it("should return date in format DD/MM/YYYY", () => {
      const resultado = utils.formatDate(1665916018);
      expect(resultado).toEqual("16/10/2022");
    });
  });

  describe("formatMetric", () => {
    it("should return metric formated", () => {
      const resultado = utils.formatMetric({ value: "90x30x50", metric: "cm" });
      expect(resultado).toEqual("90x30x50 cm");
    });
  });
  describe("formatMoney", () => {
    it("should return R$ 2008,50 when value 2008.5", () => {
      const resultado = utils.formatMoney(2008.5);
      expect(resultado).toMatch(/R\$\s2008,50/);
    });
  });

  describe("formatPhone", () => {
    it("should return cell phone with mask ##(##)#####-####", () => {
      const resultado = utils.formatPhone("5519968942132");
      expect(resultado).toEqual("+55 (19) 96894-2132");
    });

    it("should return cell phone with mask ##(##)#####-####", () => {
      const resultado = utils.formatPhone("551155886699");
      expect(resultado).toEqual("+55 (11) 5588-6699");
    });
  });
});
