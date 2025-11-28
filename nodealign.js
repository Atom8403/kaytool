// ============================================
// EXECUTION VERIFICATION - This should appear in console immediately
// ============================================
console.log('[KayTool.NodeAlign] FILE LOADED - nodealign.js is executing!');
console.log('[KayTool.NodeAlign] Timestamp:', new Date().toISOString());
console.log('[KayTool.NodeAlign] Document ready state:', document.readyState);
console.log('[KayTool.NodeAlign] Window location:', window.location.href);

// Create visible indicator to verify file execution
try {
    const testDiv = document.createElement('div');
    testDiv.id = 'kaytool-nodealign-file-loaded-indicator';
    testDiv.style.cssText = 'position:fixed;top:0;right:0;background:red;color:white;padding:5px;z-index:99999;font-size:10px;';
    testDiv.textContent = 'NodeAlign.js LOADED';
    if (document.body) {
        document.body.appendChild(testDiv);
        console.log('[KayTool.NodeAlign] Visible indicator created');
        
        // Remove indicator after 5 seconds
        setTimeout(() => {
            if (testDiv.parentNode) {
                testDiv.parentNode.removeChild(testDiv);
            }
        }, 5000);
    } else {
        console.log('[KayTool.NodeAlign] Document body not ready, will add indicator when ready');
        document.addEventListener('DOMContentLoaded', () => {
            document.body.appendChild(testDiv);
            setTimeout(() => {
                if (testDiv.parentNode) {
                    testDiv.parentNode.removeChild(testDiv);
                }
            }, 5000);
        });
    }
} catch (e) {
    console.error('[KayTool.NodeAlign] Error creating indicator:', e);
}

// ============================================
// IMPORT STATEMENT
// ============================================
import { app } from "../../../scripts/app.js";

console.log('[KayTool.NodeAlign] Import statement executed, app object:', typeof app !== 'undefined' ? 'found' : 'NOT FOUND');

// Based on NodeAligner by Tenney95 GitHub:https://github.com/Tenney95/ComfyUI-NodeAligner
 
const kayAlignBottomSvg = `<svg t="1725534360155" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1662" width="100%"><path d="M1170.285714 987.428571a36.571429 36.571429 0 0 0-36.571428-36.571428H36.571429a36.571429 36.571429 0 0 0 0 73.142857h1097.142857a36.571429 36.571429 0 0 0 36.571428-36.571429z m-219.428571-146.285714v-512a36.571429 36.571429 0 0 0-36.571429-36.571428h-219.428571a36.571429 36.571429 0 0 0-36.571429 36.571428v512a36.571429 36.571429 0 0 0 36.571429 36.571429h219.428571a36.571429 36.571429 0 0 0 36.571429-36.571429z m-438.857143 0V36.571429a36.571429 36.571429 0 0 0-36.571429-36.571429h-219.428571a36.571429 36.571429 0 0 0-36.571429 36.571429v804.571428a36.571429 36.571429 0 0 0 36.571429 36.571429h219.428571a36.571429 36.571429 0 0 0 36.571429-36.571429z" fill="#666666" p-id="1663"></path></svg>`;
const kayAlignCenterHorizontallySvg = `<svg t="1725534379860" class="icon" viewBox="0 0 1243 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2250" width="100%"><path d="M548.571429 472.356571h146.285714V231.643429a36.571429 36.571429 0 0 1 36.571428-36.571429h219.428572a36.571429 36.571429 0 0 1 36.571428 36.571429v240.713142h179.785143a39.643429 39.643429 0 0 1 0 79.286858H987.428571v240.713142a36.571429 36.571429 0 0 1-36.571428 36.571429h-219.428572a36.571429 36.571429 0 0 1-36.571428-36.571429V551.64571h-146.285714V950.857143a36.571429 36.571429 0 0 1-36.571429 36.571428H292.571429a36.571429 36.571429 0 0 1-36.571429-36.571428V551.643429H76.214857a39.643429 39.643429 0 1 1 0-79.286858H256V73.142857A36.571429 36.571429 0 0 1 292.571429 36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571428v399.213714z" fill="#666666" p-id="2251"></path></svg>`;
const kayAlignCenterVerticallySvg = `<svg t="1725534363707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1809" width="100%"><path d="M477.312 576V448H266.688a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32h210.624V34.688a34.688 34.688 0 0 1 69.376 0V192h210.624a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H546.688v128H896a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H546.688v157.312a34.688 34.688 0 0 1-69.376 0V832H128a32 32 0 0 1-32-32v-192A32 32 0 0 1 128 576h349.312z" fill="#666666" p-id="1810"></path></svg>`;
const kayAlignLeftSvg = `<svg t="1725534370541" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2103" width="100%"><path d="M96 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32A32 32 0 0 1 96 0z m128 192h448a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-448a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32z m0 384h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-704a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32z" fill="#666666" p-id="2104"></path></svg>`;
const kayAlignRightSvg = `<svg t="1725534384109" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2397" width="100%"><path d="M928 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32a32 32 0 0 1 32-32z m-576 192h448a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-448a32 32 0 0 1-32-32v-192a32 32 0 0 1 32-32z m-256 384h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32v-192A32 32 0 0 1 96 576z" fill="#666666" p-id="2398"></path></svg>`;
const kayAlignTopSvg = `<svg t="1725534367556" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1956" width="100%"><path d="M1170.285714 36.571429a36.571429 36.571429 0 0 1-36.571428 36.571428H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571429z m-219.428571 146.285714v512a36.571429 36.571429 0 0 1-36.571429 36.571428h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571428v-512a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571429z m-438.857143 0v804.571428a36.571429 36.571429 0 0 1-36.571429 36.571429h-219.428571a36.571429 36.571429 0 0 1-36.571429-36.571429v-804.571428a36.571429 36.571429 0 0 1 36.571429-36.571429h219.428571a36.571429 36.571429 0 0 1 36.571429 36.571429z" fill="#666666" p-id="1957"></path></svg>`;
const kayEqualWidthSvg = `<svg t="1725606034670" class="icon" viewBox="0 0 1088 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7213" width="100%"><path d="M978.24 480a42.688 42.688 0 0 1-42.688 42.688H172.928a42.688 42.688 0 0 1-42.688-42.688V213.312c0-23.552 19.072-42.624 42.688-42.624h762.624c23.552 0 42.688 19.072 42.688 42.624V480z" fill="#666666" p-id="7214"></path><path d="M256.96 734.144c0-14.08 11.456-25.6 25.6-25.6h543.36a25.6 25.6 0 0 1 0 51.2h-543.36a25.6 25.6 0 0 1-25.6-25.6z" fill="#666666" p-id="7215"></path><path d="M136.64 745.216a12.8 12.8 0 0 1 0-22.144l184.192-106.368a12.8 12.8 0 0 1 19.2 11.072v212.736a12.8 12.8 0 0 1-19.2 11.072l-184.192-106.368zM971.84 745.216a12.8 12.8 0 0 0 0-22.144l-184.256-106.368a12.8 12.8 0 0 0-19.2 11.072v212.736a12.8 12.8 0 0 0 19.2 11.072l184.256-106.368z" fill="#666666" p-id="7216"></path></svg>`;
const kayEqualHeightSvg = `<svg t="1725606224564" class="icon" viewBox="0 0 1088 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7790" width="100%"><path d="M572.16 936a42.688 42.688 0 0 1-42.688-42.688V130.688c0-23.616 19.136-42.688 42.688-42.688h266.688c23.552 0 42.624 19.072 42.624 42.688v762.624a42.688 42.688 0 0 1-42.624 42.688H572.16z" fill="#666666" p-id="7791"></path><path d="M318.016 214.72c14.08 0 25.6 11.456 25.6 25.6v543.36a25.6 25.6 0 1 1-51.2 0v-543.36c0-14.144 11.456-25.6 25.6-25.6z" fill="#666666" p-id="7792"></path><path d="M306.944 94.4a12.8 12.8 0 0 1 22.144 0l106.368 184.192a12.8 12.8 0 0 1-11.072 19.2H211.648a12.8 12.8 0 0 1-11.072-19.2l106.368-184.192zM306.944 929.6a12.8 12.8 0 0 0 22.144 0l106.368-184.192a12.8 12.8 0 0 0-11.072-19.2H211.648a12.8 12.8 0 0 0-11.072 19.2l106.368 184.192z" fill="#666666" p-id="7793"></path></svg>`;
const kayHorizontalDistributionSvg = `<svg t="1725534354023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1515" width="100%"><path d="M96 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32A32 32 0 0 1 96 0z m832 0a32 32 0 0 1 32 32v960a32 32 0 0 1-64 0V32a32 32 0 0 1 32-32zM384 800v-576a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32z" fill="#666666" p-id="1516"></path></svg>`;
const kayVerticalDistributionSvg = `<svg t="1725534350231" class="icon" viewBox="0 0 1170 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1368" width="100%"><path d="M1170.285714 36.571429a36.571429 36.571429 0 0 1-36.571428 36.571428H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571429z m0 950.857142a36.571429 36.571429 0 0 1-36.571428 36.571429H36.571429a36.571429 36.571429 0 0 1 0-73.142857h1097.142857a36.571429 36.571429 0 0 1 36.571428 36.571428zM256 365.714286h658.285714a36.571429 36.571429 0 0 1 36.571429 36.571428v219.428572a36.571429 36.571429 0 0 1-36.571429 36.571428h-658.285714a36.571429 36.571429 0 0 1-36.571429-36.571428v-219.428572a36.571429 36.571429 0 0 1 36.571429-36.571428z" fill="#666666" p-id="1369"></path></svg>`;


let stylesInjected = false;

const KayNodeAlignmentManager = {
    isInitialized: false,
    toolbarContainer: null,
    dragState: { isDragging: false, offsetX: 0, offsetY: 0 },
    hasShownTooltip: false,
    isVisible: true,
    position: { leftPercentage: 50, topPercentage: 5, isAttached: false, insertIndex: 0 },
    menuElement: null,
    insertionIndicator: null,

    init() {
        if (this.isInitialized) return;
        this.isInitialized = true;

        console.log('[KayTool.NodeAlign] Starting initialization...');

        // Find canvas element
        this.canvas = document.querySelector('#graph-canvas');
        if (!this.canvas) {
            console.warn('[KayTool.NodeAlign] Canvas not found during init');
        }
        
        // Try to find menu element (optional - only needed for attachment feature)
        this.findMenuElement();

        // If menu element is not found, ensure we work in floating mode
        if (!this.menuElement) {
            console.log('[KayTool.NodeAlign] Menu element not found - toolbar will work in floating mode only');
            this.position.isAttached = false;
        }

        this.injectStyles();
        this.loadPosition();
        this.setupToolbar();
        this.restorePosition();
        this.bindCanvasEvents();
        this.bindKeyboardShortcuts();

        // Check settings and update display mode (with safe fallback)
        // Don't show by default - let updateDisplayMode decide based on mode
        try {
            if (app.ui && app.ui.settings) {
                const displayMode = app.ui.settings.getSettingValue("KayTool.NodeAlignDisplayMode");
                console.log('[KayTool.NodeAlign] Display mode from settings:', displayMode);
                this.updateDisplayMode(displayMode);
            } else {
                console.warn('[KayTool.NodeAlign] Settings not available yet, using default permanent mode');
                this.updateDisplayMode("permanent");
            }
        } catch (error) {
            console.error('[KayTool.NodeAlign] Error accessing settings:', error);
            // Fallback to permanent mode if settings fail
            this.updateDisplayMode("permanent");
        }

        console.log('[KayTool.NodeAlign] Initialization complete');
    },

    findMenuElement() {
        // Try multiple methods to find the menu element (optional feature)
        // Method 1: Use app.menu API if available (preferred)
        if (app.menu?.element) {
            this.menuElement = app.menu.element;
            return;
        }
        // Method 2: Try app.menu.settingsGroup parent
        if (app.menu?.settingsGroup?.parentElement) {
            this.menuElement = app.menu.settingsGroup.parentElement;
            return;
        }
        // Method 3: Try common selectors
        const selectors = [
            '.comfyui-menu',
            '[class*="comfyui-menu"]',
            '[class*="menu"]',
            'nav',
            'header'
        ];
        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element && (element.classList.contains('comfyui-menu') || 
                element.querySelector('.comfyui-menu') ||
                Array.from(element.children).some(child => child.classList.contains('comfyui-menu')))) {
                this.menuElement = element.classList.contains('comfyui-menu') ? element : 
                    element.querySelector('.comfyui-menu') || element;
                return;
            }
        }
    },

    injectStyles() {
        if (stylesInjected) return;
        const bgColor = app.ui.settings.getSettingValue("KayTool.NodeAlignBackgroundColor");
        const iconColor = app.ui.settings.getSettingValue("KayTool.NodeAlignIconColor");
        const dividerColor = app.ui.settings.getSettingValue("KayTool.NodeAlignDividerColor");
        document.head.insertAdjacentHTML('beforeend', `<style>
            #kay-node-alignment-toolbar {
                display: flex !important;
                align-items: center;
                gap: 4px;
                padding: 4px;
                border-radius: 4px;
                z-index: 10000 !important;
                height: 32px;
                white-space: nowrap;
                user-select: none;
                pointer-events: auto;
                visibility: visible !important;
                opacity: 1 !important;
            }
            #kay-node-alignment-toolbar.floating { 
                position: fixed !important; 
                left: 50% !important;
                top: 20px !important;
                transform: translate(-50%, 0) !important;
            }
            #kay-node-alignment-toolbar.attached { 
                position: relative; 
                margin-left: 10px; 
            }
            #kay-node-alignment-toolbar.kay-toolbar-hidden {
                display: none !important;
                visibility: hidden !important;
            }
            .kay-align-button {
                width: 25px;
                height: 25px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #${app.ui.settings.getSettingValue("KayTool.NodeAlignIconBackgroundColor")};
                border: none;
                cursor: pointer;
                padding: 0;
                border-radius: 4px;
                transition: background-color 0.3s ease-in-out;
                flex-shrink: 0;
                position: relative;
                overflow: hidden;
            }
            .kay-align-button svg {
                width: 66%;
                height: 66%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                transition: transform 0.1s ease;
            }
            .kay-toolbar-divider {
                width: 3.2px;
                height: 15px;
                background: #${dividerColor};
                border-radius: 9px;
                cursor: grab;
                flex-shrink: 0;
            }
            .kay-toolbar-divider:active { cursor: grabbing; }
            #kay-align-tooltip {
                position: absolute;
                bottom: -20px;
                right: 0;
                background: #333;
                color: #fff;
                padding: 5px 10px;
                border-radius: 6px;
                display: none;
                z-index: 10001;
                white-space: nowrap;
                font-size: 12px;
            }
            #kay-insertion-indicator {
                position: absolute;
                width: 5px;
                height: 100%;
                background-color: #d0ff00;
                z-index: 10001;
                pointer-events: none;
                transition: left 0.1s ease;
                top: 0;
            }
            .comfyui-menu {
                position: relative;
                display: flex;
                align-items: center;
                transition: background-color 0.5s ease;
            }
        </style>`);
        stylesInjected = true;
    },

    loadPosition() {
        const savedPosition = JSON.parse(localStorage.getItem('KayNodeAlignToolbarPosition')) || {};
        this.position = {
            leftPercentage: savedPosition.leftPercentage || 50,
            topPercentage: savedPosition.topPercentage || 5,
            isAttached: savedPosition.isAttached || false,
            insertIndex: savedPosition.insertIndex || 0
        };
    },

    setupToolbar() {
        console.log('[KayTool.NodeAlign] Setting up toolbar...');
        
        // Get settings with safe fallbacks - declare variables in outer scope
        let bgColor = "000000";
        let opacity = 0;
        let iconColor = "999999";
        
        try {
            if (app.ui && app.ui.settings) {
                bgColor = app.ui.settings.getSettingValue("KayTool.NodeAlignBackgroundColor") || "000000";
                opacity = (app.ui.settings.getSettingValue("KayTool.NodeAlignBackgroundOpacity") || 0) / 100;
                iconColor = app.ui.settings.getSettingValue("KayTool.NodeAlignIconColor") || "999999";
            }
        } catch (settingsError) {
            console.warn('[KayTool.NodeAlign] Settings not available, using defaults:', settingsError);
        }

        try {
            this.toolbarContainer = document.createElement('div');
            this.toolbarContainer.id = 'kay-node-alignment-toolbar';
            this.toolbarContainer.classList.add(this.position.isAttached ? 'attached' : 'floating');
            
            // Set base styles - but don't show yet (updateDisplayMode will control visibility)
            if (!this.position.isAttached) {
                // Force fixed positioning for floating toolbars
                this.toolbarContainer.style.position = 'fixed';
                this.toolbarContainer.style.left = '50%';
                this.toolbarContainer.style.top = '20px';
                this.toolbarContainer.style.transform = 'translate(-50%, 0)';
            }
            this.toolbarContainer.style.display = 'none'; // Start hidden - updateDisplayMode will show it
            this.toolbarContainer.style.visibility = 'visible';
            this.toolbarContainer.style.opacity = '1';
            this.toolbarContainer.style.zIndex = '10000';
            this.toolbarContainer.style.minWidth = '200px'; // Ensure minimum width
            this.toolbarContainer.style.minHeight = '32px'; // Ensure minimum height
            
            if (opacity > 0 && /^[0-9A-Fa-f]{6}$/.test(bgColor)) {
                this.toolbarContainer.style.background = `rgba(${parseInt(bgColor.substr(0, 2), 16)}, ${parseInt(bgColor.substr(2, 2), 16)}, ${parseInt(bgColor.substr(4, 2), 16)}, ${opacity})`;
            } else {
                // Add a subtle background so it's visible even with 0 opacity
                this.toolbarContainer.style.background = 'rgba(43, 43, 43, 0.8)';
            }
            
            console.log('[KayTool.NodeAlign] Toolbar container created:', this.toolbarContainer.id);
            console.log('[KayTool.NodeAlign] Toolbar container display:', this.toolbarContainer.style.display);
            console.log('[KayTool.NodeAlign] Toolbar container position:', this.position.isAttached ? 'attached' : 'floating');
        } catch (error) {
            console.error('[KayTool.NodeAlign] Error creating toolbar container:', error);
            throw error;
        }

        if (this.position.isAttached && this.menuElement) {
            const menuChildren = Array.from(this.menuElement.children).filter(child => child !== this.insertionIndicator);
            const insertIndex = Math.min(this.position.insertIndex, menuChildren.length);
            const insertBeforeElement = menuChildren[insertIndex] || null;
            this.menuElement.insertBefore(this.toolbarContainer, insertBeforeElement);
            console.log('[KayTool.NodeAlign] Toolbar attached to menu');
        } else {
            // If menu element is missing or not attached, use floating mode
            this.position.isAttached = false;
            document.body.appendChild(this.toolbarContainer);
            console.log('[KayTool.NodeAlign] Toolbar appended to document.body');
            console.log('[KayTool.NodeAlign] Toolbar container in DOM:', document.body.contains(this.toolbarContainer));
        }

        this.insertionIndicator = document.createElement('div');
        this.insertionIndicator.id = 'kay-insertion-indicator';
        this.insertionIndicator.style.display = 'none';
        // Only append insertion indicator if menu element exists
        if (this.menuElement) {
            this.menuElement.appendChild(this.insertionIndicator);
        }

        this.getAlignmentButtons().forEach(btn => {
            const el = document.createElement(btn.type === 'divider' ? 'div' : 'button');
            el.className = btn.type === 'divider' ? 'kay-toolbar-divider' : 'kay-align-button';
            if (btn.type !== 'divider') {
                el.id = btn.id;
                el.innerHTML = btn.svg.replace(/fill="#666666"/g, `fill="#${iconColor}"`);
                el.addEventListener('click', e => btn.action.call(this, e));
                el.addEventListener('mouseover', () => {
                    try {
                        const baseColor = app.ui?.settings?.getSettingValue("KayTool.NodeAlignIconBackgroundColor") || "363636";
                        el.style.backgroundColor = this.adjustColor(baseColor, 65);
                    } catch (e) {
                        console.warn('[KayTool.NodeAlign] Error in mouseover:', e);
                    }
                });
                el.addEventListener('mouseout', () => {
                    try {
                        const baseColor = app.ui?.settings?.getSettingValue("KayTool.NodeAlignIconBackgroundColor") || "363636";
                        el.style.backgroundColor = `#${baseColor}`;
                    } catch (e) {
                        console.warn('[KayTool.NodeAlign] Error in mouseout:', e);
                    }
                });
                el.addEventListener('mousedown', () => el.style.transform = 'scale(0.95)');
                el.addEventListener('mouseup', () => el.style.transform = '');
                el.addEventListener('mouseleave', () => el.style.transform = '');
            } else {
                el.addEventListener('mousedown', e => this.onDragStart(e));
            }
            this.toolbarContainer.appendChild(el);
        });

        document.addEventListener('mousemove', this.onDragging.bind(this));
        document.addEventListener('mouseup', this.onDragEnd.bind(this));
        document.addEventListener('selectstart', e => this.dragState.isDragging && e.preventDefault());
        this.addTooltip();
        
        // Log final state
        const rect = this.toolbarContainer.getBoundingClientRect();
        console.log('[KayTool.NodeAlign] Toolbar setup complete. Position:', {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
            display: window.getComputedStyle(this.toolbarContainer).display,
            visibility: window.getComputedStyle(this.toolbarContainer).visibility,
            opacity: window.getComputedStyle(this.toolbarContainer).opacity,
            zIndex: window.getComputedStyle(this.toolbarContainer).zIndex
        });
    },

    adjustColor(hex, amount) {
        let color = hex.replace("#", "");
        if (color.length === 3) color = color.split('').map(c => c + c).join('');
        const r = parseInt(color.substr(0, 2), 16);
        const g = parseInt(color.substr(2, 2), 16);
        const b = parseInt(color.substr(4, 2), 16);
        const brightness = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
        const adjust = brightness > 127 ? -amount : amount;
        return `#${[r, g, b].map(c => Math.max(0, Math.min(255, c + adjust)).toString(16).padStart(2, '0')).join('')}`;
    },

    getAlignmentButtons() {
        return [
            { id: 'kay-align-left', svg: kayAlignLeftSvg, action: this.alignLeft },
            { id: 'kay-align-center-vertically', svg: kayAlignCenterVerticallySvg, action: this.alignCenterVertically },
            { id: 'kay-align-right', svg: kayAlignRightSvg, action: this.alignRight },
            { type: 'divider' },
            { id: 'kay-align-top', svg: kayAlignTopSvg, action: this.alignTop },
            { id: 'kay-align-center-horizontally', svg: kayAlignCenterHorizontallySvg, action: this.alignCenterHorizontally },
            { id: 'kay-align-bottom', svg: kayAlignBottomSvg, action: this.alignBottom },
            { type: 'divider' },
            { id: 'kay-equal-width', svg: kayEqualWidthSvg, action: this.equalWidth },
            { id: 'kay-equal-height', svg: kayEqualHeightSvg, action: this.equalHeight },
            { type: 'divider' }, 
            { id: 'kay-horizontal-distribution', svg: kayHorizontalDistributionSvg, action: this.horizontalDistribution },
            { id: 'kay-vertical-distribution', svg: kayVerticalDistributionSvg, action: this.verticalDistribution }
        ];
    },

    addTooltip() {
        const tooltip = document.createElement('div');
        tooltip.id = 'kay-align-tooltip';
        tooltip.textContent = 'Node alignment toolbar';
        this.toolbarContainer.appendChild(tooltip);
        if (!this.hasShownTooltip) {
            this.toolbarContainer.addEventListener('mouseenter', () => {
                if (!this.hasShownTooltip) {
                    setTimeout(() => {
                        tooltip.style.display = 'block';
                        this.hasShownTooltip = true;
                    }, 1000);
                }
            });
            this.toolbarContainer.addEventListener('mouseleave', () => tooltip.remove());
        }
    },

    show() {
        this.isVisible = true;
        if (this.toolbarContainer) {
            console.log('[KayTool.NodeAlign] Showing toolbar container');
            // Remove hidden class first
            this.toolbarContainer.classList.remove('kay-toolbar-hidden');
            // Use setProperty with important flag to override CSS !important rules
            this.toolbarContainer.style.setProperty('display', 'flex', 'important');
            
            // Force visibility
            this.toolbarContainer.style.setProperty('visibility', 'visible', 'important');
            this.toolbarContainer.style.opacity = '1';
            this.toolbarContainer.style.zIndex = '10000';
            
            // Force fixed positioning for floating toolbars
            if (!this.position.isAttached) {
                this.toolbarContainer.style.position = 'fixed';
                this.toolbarContainer.classList.remove('attached');
                this.toolbarContainer.classList.add('floating');
                // Update position after ensuring it's fixed
                requestAnimationFrame(() => {
                    this.updatePosition();
                });
            }
            
            // Log computed styles for debugging
            requestAnimationFrame(() => {
                const computedStyle = window.getComputedStyle(this.toolbarContainer);
                const rect = this.toolbarContainer.getBoundingClientRect();
                console.log('[KayTool.NodeAlign] Toolbar visibility state:', {
                    display: computedStyle.display,
                    visibility: computedStyle.visibility,
                    opacity: computedStyle.opacity,
                    zIndex: computedStyle.zIndex,
                    position: computedStyle.position,
                    left: computedStyle.left,
                    top: computedStyle.top,
                    width: rect.width,
                    height: rect.height,
                    inViewport: rect.width > 0 && rect.height > 0,
                    bounds: {
                        left: rect.left,
                        top: rect.top,
                        right: rect.right,
                        bottom: rect.bottom
                    },
                    inDOM: document.body.contains(this.toolbarContainer)
                });
            });
        } else {
            console.warn('[KayTool.NodeAlign] Cannot show - toolbar container not created yet');
        }
    },

    hide() {
        this.isVisible = false;
        if (this.toolbarContainer) {
            console.log('[KayTool.NodeAlign] Hiding toolbar');
            // Use setProperty with important flag to override CSS !important rules
            this.toolbarContainer.style.setProperty('display', 'none', 'important');
            this.toolbarContainer.style.setProperty('visibility', 'hidden', 'important');
            // Also add a hidden class as backup
            this.toolbarContainer.classList.add('kay-toolbar-hidden');
            // Verify it's hidden
            requestAnimationFrame(() => {
                const computedStyle = window.getComputedStyle(this.toolbarContainer);
                console.log('[KayTool.NodeAlign] Toolbar hidden, display:', computedStyle.display, 'visibility:', computedStyle.visibility);
            });
        } else {
            console.warn('[KayTool.NodeAlign] Cannot hide - toolbar container not created yet');
        }
    },

    updatePosition() {
        if (!this.toolbarContainer || !this.isVisible || this.position.isAttached) {
            console.log('[KayTool.NodeAlign] updatePosition skipped:', {
                hasContainer: !!this.toolbarContainer,
                isVisible: this.isVisible,
                isAttached: this.position.isAttached
            });
            return;
        }
        
        // Wait a frame to ensure toolbar is rendered and has dimensions
        requestAnimationFrame(() => {
            const { windowRect, toolbarRect } = this.getRect();
            
            // If toolbarRect has no dimensions, use CSS centering as fallback
            if (toolbarRect.width === 0 || toolbarRect.height === 0) {
                console.warn('[KayTool.NodeAlign] Toolbar has no dimensions, using CSS centering');
                this.toolbarContainer.style.left = '50%';
                this.toolbarContainer.style.top = '20px';
                this.toolbarContainer.style.transform = 'translate(-50%, 0)';
                this.toolbarContainer.style.right = 'auto';
                this.toolbarContainer.style.bottom = 'auto';
                return;
            }
        
            // Calculate position based on saved percentages
            let left = (this.position.leftPercentage / 100) * windowRect.width - toolbarRect.width / 2;
            let top = (this.position.topPercentage / 100) * windowRect.height;
            
            // Clamp to ensure toolbar stays on screen
            const minLeft = 10; // 10px margin from left edge
            const maxLeft = windowRect.width - toolbarRect.width - 10; // 10px margin from right edge
            const minTop = 10; // 10px margin from top
            const maxTop = windowRect.height - toolbarRect.height - 10; // 10px margin from bottom
            
            left = Math.max(minLeft, Math.min(left, maxLeft));
            top = Math.max(minTop, Math.min(top, maxTop));
            
            // Apply position
            this.toolbarContainer.style.left = `${left}px`;
            this.toolbarContainer.style.top = `${top}px`;
            this.toolbarContainer.style.transform = ''; // Clear any transform
            this.toolbarContainer.style.right = 'auto';
            this.toolbarContainer.style.bottom = 'auto';
            
            // Verify it's on screen
            const finalRect = this.toolbarContainer.getBoundingClientRect();
            const isOnScreen = finalRect.left >= 0 && 
                              finalRect.top >= 0 && 
                              finalRect.right <= windowRect.width && 
                              finalRect.bottom <= windowRect.height;
            
            if (!isOnScreen) {
                console.warn('[KayTool.NodeAlign] Toolbar still off-screen, resetting to center-top');
                // Reset to safe default position
                this.toolbarContainer.style.left = '50%';
                this.toolbarContainer.style.top = '20px';
                this.toolbarContainer.style.transform = 'translate(-50%, 0)';
                // Update saved position
                this.position.leftPercentage = 50;
                this.position.topPercentage = (20 / windowRect.height) * 100;
                localStorage.setItem('KayNodeAlignToolbarPosition', JSON.stringify(this.position));
            }
            
            console.log('[KayTool.NodeAlign] Position updated:', { 
                left, 
                top, 
                width: toolbarRect.width, 
                height: toolbarRect.height,
                finalLeft: finalRect.left,
                finalTop: finalRect.top,
                isOnScreen
            });
        });
    },

    getRect() {
        const toolbarRect = this.toolbarContainer ? this.toolbarContainer.getBoundingClientRect() : { width: 0, height: 0, top: 0, left: 0, bottom: 0, right: 0 };
        const menuRect = this.menuElement ? this.menuElement.getBoundingClientRect() : { width: 0, height: 0, top: 0, left: 0, bottom: 0, right: 0 };
        return {
            windowRect: { width: window.innerWidth, height: window.innerHeight },
            toolbarRect: toolbarRect,
            menuRect: menuRect
        };
    },

    onDragStart(e) {
        e.preventDefault();
        const { toolbarRect } = this.getRect();
        this.dragState = {
            isDragging: true,
            offsetX: e.clientX - toolbarRect.left,
            offsetY: e.clientY - toolbarRect.top
        };
    },

    onDragging(e) {
        if (!this.dragState.isDragging) return;

        const { windowRect, toolbarRect, menuRect } = this.getRect();

        if (this.position.isAttached && this.menuElement) {
            this.detachFromMenu(true);
            this.menuElement.style.backgroundColor = '#d0ff00';
        }

        let left = e.clientX - this.dragState.offsetX;
        let top = e.clientY - this.dragState.offsetY;
        left = Math.max(0, Math.min(left, windowRect.width - toolbarRect.width));
        top = Math.max(0, Math.min(top, windowRect.height - toolbarRect.height));
        this.toolbarContainer.style.left = `${left}px`;
        this.toolbarContainer.style.top = `${top}px`;

        // Only handle menu attachment if menu element exists
        if (this.menuElement && this.insertionIndicator) {
            const toolbarBottom = toolbarRect.top + toolbarRect.height;
            if (toolbarBottom > menuRect.top && toolbarRect.top < menuRect.bottom) {
                this.menuElement.style.backgroundColor = '#000000';
                this.insertionIndicator.style.display = 'block';
                const menuChildren = Array.from(this.menuElement.children).filter(child => child !== this.insertionIndicator && child !== this.toolbarContainer);
                const toolbarCenterX = toolbarRect.left + toolbarRect.width / 2;
                let indicatorLeft = 0;
                for (let i = 0; i < menuChildren.length; i++) {
                    const childRect = menuChildren[i].getBoundingClientRect();
                    if (toolbarCenterX < childRect.left + childRect.width / 2) {
                        indicatorLeft = childRect.left - menuRect.left;
                        break;
                    }
                    indicatorLeft = menuChildren[menuChildren.length - 1]?.getBoundingClientRect().right - menuRect.left || 0;
                }
                this.insertionIndicator.style.left = `${Math.max(0, Math.min(indicatorLeft, menuRect.width - this.insertionIndicator.offsetWidth))}px`;
            } else {
                this.menuElement.style.backgroundColor = '#d0ff00';
                this.insertionIndicator.style.display = 'none';
            }
        }
    },

    onDragEnd() {
        if (!this.dragState.isDragging) return;

        this.dragState.isDragging = false;
        this.dragState.offsetX = 0;
        this.dragState.offsetY = 0;

        const { windowRect, toolbarRect, menuRect } = this.getRect();
        
        // Only try to attach to menu if menu element exists
        if (this.menuElement && toolbarRect.top + toolbarRect.height > menuRect.top && toolbarRect.top < menuRect.bottom) {
            const menuChildren = Array.from(this.menuElement.children).filter(child => child !== this.insertionIndicator && child !== this.toolbarContainer);
            const toolbarCenterX = toolbarRect.left + toolbarRect.width / 2;
            let insertIndex = 0;
            for (let i = 0; i < menuChildren.length; i++) {
                const childRect = menuChildren[i].getBoundingClientRect();
                if (toolbarCenterX < childRect.left + childRect.width / 2) {
                    insertIndex = i;
                    break;
                }
                insertIndex = i + 1;
            }
            this.attachToMenu(menuChildren[insertIndex]);
            this.position.isAttached = true;
            this.position.insertIndex = insertIndex;
        } else {
            this.position.leftPercentage = ((toolbarRect.left + toolbarRect.width / 2) / windowRect.width) * 100;
            this.position.topPercentage = (toolbarRect.top / windowRect.height) * 100;
            this.position.isAttached = false;
            this.position.insertIndex = 0;
        }

        localStorage.setItem('KayNodeAlignToolbarPosition', JSON.stringify(this.position));
        
        // Only reset menu styles if menu element exists
        if (this.menuElement) {
            this.menuElement.style.backgroundColor = '';
        }
        if (this.insertionIndicator) {
            this.insertionIndicator.style.display = 'none';
        }
    },

    attachToMenu(insertBeforeElement) {
        if (!this.menuElement) {
            console.warn('[KayTool.NodeAlign] Cannot attach to menu - menu element not found');
            this.position.isAttached = false;
            return;
        }
        this.position.isAttached = true;
        this.toolbarContainer.classList.remove('floating');
        this.toolbarContainer.classList.add('attached');
        this.toolbarContainer.style.left = '';
        this.toolbarContainer.style.top = '';
        this.menuElement.insertBefore(this.toolbarContainer, insertBeforeElement || null);
    },

    detachFromMenu(isDragging) {
        if (!isDragging) return;
        this.position.isAttached = false;
        this.toolbarContainer.classList.remove('attached');
        this.toolbarContainer.classList.add('floating');
        document.body.appendChild(this.toolbarContainer);
        this.updatePosition();
    },

    restorePosition() {
        if (!this.position.isAttached || !this.menuElement || !this.toolbarContainer) {
            this.position.isAttached = false;
            this.updatePosition();
            return;
        }
        // Double-check menu element still exists before trying to attach
        if (!this.menuElement || !document.contains(this.menuElement)) {
            console.warn('[KayTool.NodeAlign] Menu element no longer available - switching to floating mode');
            this.position.isAttached = false;
            this.updatePosition();
            return;
        }
        const menuChildren = Array.from(this.menuElement.children).filter(child => child !== this.insertionIndicator && child !== this.toolbarContainer);
        const insertIndex = Math.min(this.position.insertIndex, menuChildren.length);
        this.attachToMenu(menuChildren[insertIndex]);
    },

    getSelectedNodes() {
        // Use LGraphCanvas.active_canvas for more reliable canvas access
        const canvas = LGraphCanvas.active_canvas || app.canvas;
        if (!canvas) return [];
        const selectedNodesObj = canvas.selected_nodes;
        return selectedNodesObj ? Object.values(selectedNodesObj) : [];
    },

    alignLeft() {
        const nodes = this.getSelectedNodes();
        const minX = Math.min(...nodes.map(n => n.pos[0]));
        nodes.forEach(n => n.pos[0] = minX);
        this.redraw();
    },

    alignRight() {
        const nodes = this.getSelectedNodes();
        const maxX = Math.max(...nodes.map(n => n.pos[0] + n.size[0]));
        nodes.forEach(n => n.pos[0] = maxX - n.size[0]);
        this.redraw();
    },

    alignTop() {
        const nodes = this.getSelectedNodes();
        const minY = Math.min(...nodes.map(n => n.pos[1]));
        nodes.forEach(n => n.pos[1] = minY);
        this.redraw();
    },

    alignBottom() {
        const nodes = this.getSelectedNodes();
        const maxY = Math.max(...nodes.map(n => n.pos[1] + n.size[1]));
        nodes.forEach(n => n.pos[1] = maxY - n.size[1]);
        this.redraw();
    },

    alignCenterHorizontally() {
        const nodes = this.getSelectedNodes();
        const minY = Math.min(...nodes.map(n => n.pos[1]));
        const maxY = Math.max(...nodes.map(n => n.pos[1] + n.size[1]));
        const centerY = (minY + maxY) / 2;
        nodes.forEach(n => n.pos[1] = centerY - n.size[1] / 2);
        this.redraw();
    },

    alignCenterVertically() {
        const nodes = this.getSelectedNodes();
        const minX = Math.min(...nodes.map(n => n.pos[0]));
        const maxX = Math.max(...nodes.map(n => n.pos[0] + n.size[0]));
        const centerX = (minX + maxX) / 2;
        nodes.forEach(n => n.pos[0] = centerX - n.size[0] / 2);
        this.redraw();
    },

    equalWidth() {
        const nodes = this.getSelectedNodes();
        if (nodes.length) nodes.forEach(n => n.size[0] = nodes[0].size[0]);
        this.redraw();
    },

    equalHeight() {
        const nodes = this.getSelectedNodes();
        if (nodes.length) nodes.forEach(n => n.size[1] = nodes[0].size[1]);
        this.redraw();
    },

    horizontalDistribution() {
        const nodes = this.getSelectedNodes();
        const axis = 0;
        if (nodes.length > 1) {
            nodes.sort((a, b) => a.pos[axis] - b.pos[axis]);
            const min = Math.min(...nodes.map(node => node.pos[axis]));
            const max = Math.max(...nodes.map(node => node.pos[axis] + node.size[axis]));
            const totalSize = nodes.reduce((sum, node) => sum + node.size[axis], 0);
            const spacing = (max - min - totalSize) / (nodes.length - 1);
            let current = min;
            nodes.forEach(node => {
                node.pos[axis] = current;
                current += node.size[axis] + spacing;
            });
            this.redraw();
        }
    },

    verticalDistribution() {
        const nodes = this.getSelectedNodes();
        if (nodes.length > 1) {
            const axis = 1;
            const otherAxis = 0;
            const tolerance = 100;
            const minSpacing = 20;

            const columns = [];
            nodes.forEach(node => {
                let foundColumn = null;
                for (let column of columns) {
                    const columnX = column[0].pos[otherAxis];
                    if (Math.abs(columnX - node.pos[otherAxis]) <= tolerance) {
                        foundColumn = column;
                        break;
                    }
                }
                if (foundColumn) {
                    foundColumn.push(node);
                } else {
                    columns.push([node]);
                }
            });

            const columnHeights = columns.map(column => {
                const minY = Math.min(...column.map(node => node.pos[axis]));
                const maxY = Math.max(...column.map(node => node.pos[axis] + node.size[axis]));
                return maxY - minY;
            });
            const maxColumnHeight = Math.max(...columnHeights);

            columns.forEach(column => {
                if (column.length > 1) {
                    column.sort((a, b) => a.pos[axis] - b.pos[axis]);
                    const minY = Math.min(...column.map(node => node.pos[axis]));
                    const totalSize = column.reduce((sum, node) => sum + node.size[axis], 0);
                    let spacing = (maxColumnHeight - totalSize) / (column.length - 1);
                    spacing = Math.max(spacing, minSpacing);
                    let currentY = column[0].pos[axis];
                    column.forEach((node, idx) => {
                        if (idx === 0) {
                            currentY += node.size[axis] + spacing;
                        } else {
                            node.pos[axis] = currentY;
                            currentY += node.size[axis] + spacing;
                        }
                        node.pos[otherAxis] = column[0].pos[otherAxis];
                    });
                }
            });
            this.redraw();
        }
    },

    redraw() {
        // Use LGraphCanvas.active_canvas for more reliable canvas access
        const canvas = LGraphCanvas.active_canvas || app.canvas;
        if (canvas) canvas.setDirty(true, true);
    },

    updateDisplayMode(mode) {
        // Ensure toolbar container exists before trying to update display
        if (!this.toolbarContainer) {
            console.warn('[KayTool.NodeAlign] updateDisplayMode called before toolbar container exists, deferring...');
            // Defer until container is ready
            setTimeout(() => this.updateDisplayMode(mode), 100);
            return;
        }
        
        // Ensure we have a valid mode, default to "permanent"
        const effectiveMode = (mode && typeof mode === 'string') ? mode : "permanent";
        console.log('[KayTool.NodeAlign] updateDisplayMode called with:', effectiveMode);
        
        if (effectiveMode === "disabled") {
            console.log('[KayTool.NodeAlign] Hiding toolbar (disabled mode)');
            this.hide();
        } else if (effectiveMode === "permanent") {
            console.log('[KayTool.NodeAlign] Showing toolbar (permanent mode)');
            this.show();
        } else if (effectiveMode === "on-select") {
            const selectedNodes = this.getSelectedNodes();
            console.log('[KayTool.NodeAlign] On-select mode, selected nodes:', selectedNodes.length);
            if (selectedNodes.length >= 2) {
                console.log('[KayTool.NodeAlign] 2+ nodes selected, showing toolbar');
                this.show();
            } else {
                console.log('[KayTool.NodeAlign] Less than 2 nodes selected, hiding toolbar');
                this.hide();
            }
        } else {
            // Unknown mode, default to permanent
            console.warn('[KayTool.NodeAlign] Unknown display mode:', effectiveMode, '- defaulting to permanent');
            this.show();
        }
    },

    bindCanvasEvents() {
        // Use LGraphCanvas.active_canvas for more reliable canvas access
        const canvas = LGraphCanvas.active_canvas || this.canvas;
        if (!canvas) {
            console.warn('[KayTool.NodeAlign] Canvas not available - cannot bind canvas events');
            return;
        }
        try {
            // Listen for selection changes, not just clicks
            const handleSelectionChange = () => {
                try {
                    if (app.ui && app.ui.settings) {
                        const currentMode = app.ui.settings.getSettingValue("KayTool.NodeAlignDisplayMode");
                        if (currentMode === "on-select") {
                            // For on-select mode, check selection immediately
                            this.updateDisplayMode(currentMode);
                        }
                    }
                } catch (error) {
                    console.error('[KayTool.NodeAlign] Error in selection change handler:', error);
                }
            };

            // Listen to canvas click events
            canvas.addEventListener('click', handleSelectionChange);
            
            // Also listen to selection events if available
            if (canvas.onSelectionChange) {
                canvas.onSelectionChange = ((original) => {
                    return function(...args) {
                        if (original) original.apply(this, args);
                        handleSelectionChange();
                    };
                })(canvas.onSelectionChange);
            }
            
            // Poll for selection changes as fallback (only when in on-select mode)
            let pollInterval = null;
            const startPolling = () => {
                if (pollInterval) clearInterval(pollInterval);
                pollInterval = setInterval(() => {
                    try {
                        if (app.ui && app.ui.settings) {
                            const currentMode = app.ui.settings.getSettingValue("KayTool.NodeAlignDisplayMode");
                            if (currentMode === "on-select") {
                                // Always update display mode when in on-select mode
                                this.updateDisplayMode(currentMode);
                            } else {
                                // Stop polling if not in on-select mode
                                if (pollInterval) {
                                    clearInterval(pollInterval);
                                    pollInterval = null;
                                }
                            }
                        }
                    } catch (error) {
                        // Silently ignore errors in polling
                    }
                }, 200); // Check every 200ms for more responsive updates
            };
            // Start polling immediately
            startPolling();
        } catch (error) {
            console.error('[KayTool.NodeAlign] Error binding canvas events:', error);
        }
    },

    bindKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // 只在 Shift 键按下且没有其他修饰键（如 Ctrl、Alt）时检查 WASD
            if (!e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return;

            const enableShortcuts = app.ui.settings.getSettingValue("KayTool.EnableAlignmentShortcuts");
            if (!enableShortcuts || this.getSelectedNodes().length < 2) return;

            switch (e.key.toLowerCase()) {
                case 'w':
                    e.preventDefault();
                    this.alignTop();
                    break;
                case 'a':
                    e.preventDefault();
                    this.alignLeft();
                    break;
                case 's':
                    e.preventDefault();
                    this.alignBottom();
                    break;
                case 'd':
                    e.preventDefault();
                    this.alignRight();
                    break;
            }
        });
    }
};

function pollForCanvas() {
    const canvas = document.querySelector('canvas#graph-canvas');
    if (canvas) {
        console.log('[KayTool.NodeAlign] Canvas found, initializing...');
        
        // Canvas found, initialize the toolbar
        if (!KayNodeAlignmentManager.isInitialized) {
            KayNodeAlignmentManager.init();
        } else {
            console.log('[KayTool.NodeAlign] Already initialized, updating display mode...');
            // Update display mode if already initialized (with safe fallback)
            try {
                if (app.ui && app.ui.settings) {
                    const displayMode = app.ui.settings.getSettingValue("KayTool.NodeAlignDisplayMode");
                    KayNodeAlignmentManager.updateDisplayMode(displayMode);
                } else {
                    console.warn('[KayTool.NodeAlign] Settings not available, using permanent mode');
                    KayNodeAlignmentManager.updateDisplayMode("permanent");
                }
            } catch (error) {
                console.error('[KayTool.NodeAlign] Error updating display mode:', error);
                KayNodeAlignmentManager.updateDisplayMode("permanent");
            }
        }
        
        // Expose manager to window for settings integration
        window.KayNodeAlignmentManager = KayNodeAlignmentManager;
        window.initializeKayNodeAlignment = initializeKayNodeAlignment;
        
        // Note: Canvas click events are handled in bindCanvasEvents()
        // This is just for the initial setup
        
        console.log('[KayTool.NodeAlign] Extension initialized successfully');
    } else {
        // Canvas not found yet, try again after a delay
        console.log('[KayTool.NodeAlign] Canvas not found, retrying in 1 second...');
        setTimeout(pollForCanvas, 1000);
    }
}

function initializeKayNodeAlignment() {
    console.log('[KayTool.NodeAlign] initializeKayNodeAlignment called');
    if (!KayNodeAlignmentManager.isInitialized) {
        KayNodeAlignmentManager.init();
    } else {
        try {
            if (app.ui && app.ui.settings) {
                const displayMode = app.ui.settings.getSettingValue("KayTool.NodeAlignDisplayMode");
                KayNodeAlignmentManager.updateDisplayMode(displayMode);
            } else {
                console.warn('[KayTool.NodeAlign] Settings not available, using permanent mode');
                KayNodeAlignmentManager.updateDisplayMode("permanent");
            }
        } catch (error) {
            console.error('[KayTool.NodeAlign] Error in initializeKayNodeAlignment:', error);
            KayNodeAlignmentManager.updateDisplayMode("permanent");
        }
    }
}

// ============================================
// EXTENSION REGISTRATION WITH FALLBACK
// ============================================
console.log('[KayTool.NodeAlign] Attempting to register extension...');
console.log('[KayTool.NodeAlign] app object available:', typeof app !== 'undefined');
console.log('[KayTool.NodeAlign] app.registerExtension available:', typeof app !== 'undefined' && typeof app.registerExtension === 'function');

try {
    if (typeof app !== 'undefined' && typeof app.registerExtension === 'function') {
        app.registerExtension({
            name: "KayTool.NodeAlign",
            setup() {
                console.log('[KayTool.NodeAlign] Extension setup() called, starting canvas polling...');
                // Start polling for canvas element (like node_info.js approach)
                // Use immediate check first, then fall back to polling
                const canvas = document.querySelector('canvas#graph-canvas');
                if (canvas) {
                    console.log('[KayTool.NodeAlign] Canvas already available, initializing immediately');
                    pollForCanvas();
                } else {
                    console.log('[KayTool.NodeAlign] Canvas not yet available, starting polling...');
                    pollForCanvas();
                }
            }
        });
        console.log('[KayTool.NodeAlign] Extension registered successfully via app.registerExtension');
    } else {
        console.warn('[KayTool.NodeAlign] app.registerExtension not available, using direct execution fallback');
        // Fallback: Direct execution like node_info.js
        directExecutionFallback();
    }
} catch (registrationError) {
    console.error('[KayTool.NodeAlign] Error registering extension:', registrationError);
    console.log('[KayTool.NodeAlign] Attempting direct execution fallback...');
    directExecutionFallback();
}

// ============================================
// DIRECT EXECUTION FALLBACK (like node_info.js)
// ============================================
function directExecutionFallback() {
    console.log('[KayTool.NodeAlign] Using direct execution fallback (no extension registration)');
    
    // Start polling immediately
    pollForCanvas();
    
    // Also try immediate execution if document is ready
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        console.log('[KayTool.NodeAlign] Document ready, attempting immediate initialization');
        const canvas = document.querySelector('canvas#graph-canvas');
        if (canvas) {
            pollForCanvas();
        }
    } else {
        // Wait for DOM to be ready
        document.addEventListener('DOMContentLoaded', () => {
            console.log('[KayTool.NodeAlign] DOMContentLoaded fired, checking for canvas');
            pollForCanvas();
        });
        
        // Also listen for window load
        window.addEventListener('load', () => {
            console.log('[KayTool.NodeAlign] Window load fired, checking for canvas');
            pollForCanvas();
        });
    }
}

// Also try direct execution as backup (runs immediately)
console.log('[KayTool.NodeAlign] Setting up direct execution backup...');
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('[KayTool.NodeAlign] Document already ready, starting backup poll');
    setTimeout(() => {
        if (!KayNodeAlignmentManager.isInitialized) {
            console.log('[KayTool.NodeAlign] Backup: Extension not initialized yet, starting direct poll');
            pollForCanvas();
        }
    }, 2000);
} else {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (!KayNodeAlignmentManager.isInitialized) {
                console.log('[KayTool.NodeAlign] Backup: Extension not initialized after DOMContentLoaded, starting direct poll');
                pollForCanvas();
            }
        }, 2000);
    });
}