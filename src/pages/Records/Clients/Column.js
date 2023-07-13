import InterminantCheckBox from 'components/third-party/InterminantCheckBox';

export const clientsColumn = [
  {
    id: 'select',
    header: ({ table }) => (
      <InterminantCheckBox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler()
        }}
      />
    ),
    cell: ({ row }) => (
      <div className="px-1">
        <InterminantCheckBox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler()
          }}
        />
      </div>
    )
  },
  { id: 1, header: 'Company Name', accessorKey: 'corpName' },
  { id: 2, header: 'Billing Address', accessorKey: 'billingAddress' },
  { id: 3, header: 'City', accessorKey: 'city' },
  { id: 4, header: 'Email', accessorKey: 'contactEmail' },
  { id: 5, header: 'Phone', accessorKey: 'contactPhone' }
];
