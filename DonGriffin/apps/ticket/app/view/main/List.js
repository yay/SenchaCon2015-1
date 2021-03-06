/**
 * This view is an example list of tickets.
 */
Ext.define('Ticket.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Ext.grid.plugin.CellEditing',

        'Ticket.store.Tickets',
        'Ticket.grid.column.Glyph'
    ],

    title: 'Tickets',

    bind: {
        store: '{tickets}'
    },

    plugins: 'cellediting',
    
    tools: [{
        type: 'gear',
        handler: 'onShowChanges'
    }],
    
    columns: [
        { text: 'Id',  dataIndex: 'id', width: 50 },
        { text: 'Summary', dataIndex: 'summary', editor: 'textfield', flex: 1 },
        {
            xtype: 'glyphcolumn',
            width: 40,
            align: 'center',
            items: ['fa-edit' ],
            handler: 'onEditRow'
        }
    ]
});
