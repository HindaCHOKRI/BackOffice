import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        icon     : 'apps',
        children : [
            {
                id       : 'dashboards',
                title    : 'Dashboards',
                translate: 'NAV.DASHBOARDS',
                type     : 'collapsable',
                icon     : 'dashboard',
                children : [
                    {
                        id   : 'analytics',
                        title: 'Analytics',
                        type : 'item',
                        url  : '/apps/dashboards/analytics'
                    },
                    {
                        id   : 'project',
                        title: 'Project',
                        type : 'item',
                        url  : '/apps/dashboards/project'
                    }
                ]
            },
            {
                id   : 'profile',
                title: 'Profile',
                type : 'item',
                icon : 'person',
                url  : '/pages/profile'
            },
            {
                id       : 'calendar',
                title    : 'Calendar',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/apps/calendar'
            },
            {
                id       : 'academy',
                title    : 'Academy',
                translate: 'NAV.ACADEMY',
                type     : 'item',
                icon     : 'school',
                url      : '/apps/academy'
            },

            {
                id       : 'mail-ngrx',
                title    : 'Mail',
                translate: 'NAV.MAIL_NGRX.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/apps/mail-ngrx',
                badge    : {
                    title    : '99',
                    translate: 'NAV.MAIL_NGRX.BADGE',
                    bg       : '#EC0C8E',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'chat',
                title    : 'Chat',
                translate: 'NAV.CHAT',
                type     : 'item',
                icon     : 'chat',
                url      : '/apps/chat',
                badge    : {
                    title: '99',
                    bg   : '#09d261',
                    fg   : '#FFFFFF'
                }
            },
            {
                id       : 'invoice',
                title    : 'invoice',
                type     : 'item',
                icon     : 'receipt',
                url      : '/pages/invoices/modern',
    
            },
         
           
        ]
    },
    

    
];
