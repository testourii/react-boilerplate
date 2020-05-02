$(function(e) {
  "use strict";
  $(".date-inputmask").inputmask("dd/mm/yyyy"),
    $(".phone-inputmask").inputmask("(999) 999-9999"),
    $(".international-inputmask").inputmask("+9(999)999-9999"),
    $(".xphone-inputmask").inputmask("99 99 99 99"),
    $(".purchase-inputmask").inputmask("aaaa 9999-****"),
    $(".cc-inputmask").inputmask("99 \\ans"),
    $(".ssn-inputmask").inputmask("99 999 999"),
    $(".isbn-inputmask").inputmask("999-99-999-9999-9"),
    $(".currency-inputmask").inputmask("$9999"),
    $(".percentage-inputmask").inputmask("99 %"),
    $(".BPM-inputmask").inputmask({ mask: "99[9] BPM", greedy: false }),
    $(".PA-inputmask").inputmask("99 ??"),
    $(".temperature-inputmask").inputmask("99 °C"),
    $(".jour-inputmask").inputmask("depuis 99 jours"),
    $(".fr-inputmask").inputmask({ mask: "99[9] CPM", greedy: false }),
    $(".PASPAD-inputmask").inputmask({
      mask: "99[9] / 99[9] mmHg",
      greedy: false
    }),
    //  $(".valeur-inputmask").inputmask("Regex", { regex: "([3-9]|1[0-5])" }),
    $(".valeur-inputmask").inputmask("numeric", {
      min: 0,
      max: 100
    }),
    $(".decimal-inputmask").inputmask({
      alias: "decimal",
      radixPoint: "."
    }),
    $(".email-inputmask").inputmask({
      mask:
        "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[*{2,6}][*{1,2}].*{1,}[.*{2,6}][.*{1,2}]",
      greedy: !1,
      onBeforePaste: function(n, a) {
        return (e = e.toLowerCase()).replace("mailto:", "");
      },
      definitions: {
        "*": {
          validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~/-]",
          cardinality: 1,
          casing: "lower"
        }
      }
    });
});
