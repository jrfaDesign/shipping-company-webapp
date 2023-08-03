export const getFilterOptions = (
  tableType: string,
  data: any,
  tableForAdmin: boolean | undefined
) => {
  //TODO: get options one ** new option ** based on all orders.state
  const allCitiesOptions = data.reduce((acc: any, current: any) => {
    const stateExists = acc.some((item: any) => item.value === current.client.state);

    if (!stateExists) {
      acc.push({ label: current.client.state, value: current.client.state });
    }

    return acc;
  }, []);

  const allShippers = data.reduce((acc: any, current: any) => {
    const shipperExists = acc.some((item: any) => item.value === current.shipper._id);

    if (!shipperExists) {
      acc.push({
        label: `${current.shipper.name} - ${current.shipper._id}`,
        value: current.shipper._id
      });
    }

    return acc;
  }, []);

  allShippers.sort((a: any, b: any) => a.label.localeCompare(b.label));
  allCitiesOptions.sort((a: any, b: any) => a.label.localeCompare(b.label));

  if (tableType === "orders") {
    const filterOptions = [
      {
        label: "Expeditor",
        options: allShippers,
        isOnlyForAdmin: true,
        multiple: true
      },
      {
        label: "Estado de Entrega",
        options: [
          { value: "Completed", label: "Completa" },
          { value: "On the road", label: "Em distribuição" },
          { value: "Cancelled", label: "Cancelada" }
        ],
        multiple: true,
        isOnlyForAdmin: false
      },
      {
        label: "Cidade",
        options: allCitiesOptions,
        multiple: true,
        isOnlyForAdmin: false
      }
    ];

    const filteredFilterOptions = filterOptions.filter((options) => {
      if (tableForAdmin) {
        return true;
      } else {
        return !options.isOnlyForAdmin;
      }
    });
    return filteredFilterOptions;
  }
};
