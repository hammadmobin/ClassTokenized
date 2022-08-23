import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {EventEmitter} from "events";
import {UI_SCREENS} from "../../shared/constants/ui.constants";
import {filter, takeUntil} from "rxjs/operators";
import {NavigationEnd, Router} from "@angular/router";
import {Subject} from "rxjs";
import {UiService} from "../../services/ui.service";
import {Btn_Styles, BtnOptions} from "../../shared/interfaces/buttons";

@Component({
    selector: 'app-main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit, OnDestroy {

    customPopoverOptions: any = {
        header: 'Why We Are Here',
    };
    createBtnOptions: BtnOptions = {
        label: 'Create',
        btnStyleType: Btn_Styles.primary,
        url: '/'
    };
    connectBtnOptions: BtnOptions = {
        label: 'Connect',
        btnStyleType: Btn_Styles.secondary,
        url: '/profile'
    };
    @Input() title;
    @Input() contentId = '';
    @Output() currentRouteUpdated = new EventEmitter();
    public selectedIndex = 0;
    public appPages = [
        {
            title: 'Explore',
            url: '/home#explore',
            icon: 'mail'
        },
        {
            title: 'Community',
            url: '/home',
            icon: 'paper-plane'
        },
        {
            title: 'Collection',
            url: '/home',
            icon: 'heart'
        },
        {
            title: 'Following',
            url: '/home',
            icon: 'people'
        },
    ];
    screenType = UI_SCREENS.phone;
    screenIDs = UI_SCREENS;
    isAuthenticated = false;
    currentRoute: string;
    $destroy = new Subject<void>();
    screenResizeSubscriber = {
        next: (screenType: number) => {
            this.screenType = screenType;
        },
        error: (err) => {
            console.log(err);
        }
    };

    constructor(
        private router: Router,
        private uiService: UiService,
    ) {

        router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            takeUntil(this.$destroy))
            .subscribe((event: NavigationEnd) => {
                this.currentRoute = event.url;
                this.currentRouteUpdated.emit(this.currentRoute);
            });
    }

    ngOnInit() {
        this.uiService.getScreenTypeObservable().pipe(takeUntil(this.$destroy)).subscribe(this.screenResizeSubscriber);
    }

    ngOnDestroy() {
        this.$destroy.next();
    }

}
