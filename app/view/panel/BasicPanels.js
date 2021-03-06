/**
 * This example shows how to create basic panels. Panels typically have a header and a body,
 * although the header is optional. The panel header can contain a title, and icon, and
 * one or more tools for performing specific actions when clicked.
 */
Ext.define('MyApp.view.panel.BasicPanels', {
    extend: 'Ext.Container',
    xtype: 'basic-panels',
    width: 660,
    requires: [
        'Ext.layout.container.Table'
    ],

    layout: {
        type: 'table',
        columns: 3,
        tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        height: 280,
        bodyPadding: 10
    },
    initComponent: function () {
        this.items = [
            {
                html:'我没有标题'
            },
            {
                title: 'Title',
                html: '我有标题'
            },
            {
                title: 'Collapsible',
                collapsible: true,
                html: '我能收缩'
            },
            {
                title: 'Tools',
                collapsible: true,
                width: 640,
                html: '我有工具栏',
                tools: [
                    { type:'pin' },
                    { type:'refresh' },
                    { type:'search' },
                    { type:'save' }
                ],
                colspan: 3
            }
        ];

        this.callParent();
    }
});
