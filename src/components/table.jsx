export default function Table(){
    return(<table>
    <Table.Root size="sm">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Id</Table.ColumnHeader>
          <Table.ColumnHeader>Fecha</Table.ColumnHeader>
          <Table.ColumnHeader>Descripcion</Table.ColumnHeader>
          <Table.ColumnHeader>Modulo</Table.ColumnHeader>
          <Table.ColumnHeader>Opcion</Table.ColumnHeader>
          <Table.ColumnHeader>Observaciones</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell textAlign="end">{item.price}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </table>)
}