export const getFilterOptions = (tableType: string, data: any) => {
  const allCitiesOptions = data.reduce((acc: any, current: any) => {
    const stateExists = acc.some((item: any) => item.value === current.state);

    if (!stateExists) {
      acc.push({ label: current.state, value: current.state });
    }

    return acc;
  }, []);

  allCitiesOptions.sort((a: any, b: any) => a.label.localeCompare(b.label));

  if (tableType === "orders") {
    return [
      {
        label: "Estado de Entrega",
        options: [
          { value: "Completed", label: "Completa" },
          { value: "On the road", label: "Em distribuição" },
          { value: "Cancelled", label: "Cancelada" }
        ],
        multiple: true
      },
      {
        label: "Cidade",
        options: allCitiesOptions,
        multiple: true
      }
    ];
  }
};
