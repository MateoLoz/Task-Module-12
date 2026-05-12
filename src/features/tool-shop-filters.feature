Feature: Tool shop filters

  Scenario Outline: Validate product sorting

    Given the user opens the tool shop page
    When the user selects the "<filter>" filter
    Then the products should be ordered by "<type>" in "<order>" order

    Examples:
      | filter                      | type  | order |
      | Nombre (A - Z)              | name  | asc   |
      | Nombre (Z - A)              | name  | desc  |
      | Precio (Bajo - Alto)        | price | asc   |
      | Precio (Alto - Bajo)        | price | desc  |
      | Calificación CO₂ (A - E)    | co2   | asc   |
      | Calificación CO₂ (E - A)    | co2   | desc  |