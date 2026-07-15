# Graph Report - gurleen-s-bridal-studio  (2026-07-08)

## Corpus Check
- 115 files · ~35,893 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 694 nodes · 1107 edges · 56 communities (46 shown, 10 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 29 edges (avg confidence: 0.54)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `df4c8144`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Layout and Navigation Components
- Frontend Dependencies
- Routing and Sitemap Logic
- Project Configuration and Linting
- Sidebar Component
- Interactive UI Components
- Core UI Elements
- TypeScript Configuration
- Project Structure Configuration
- Command and Dialog Components
- menubar.tsx
- form.tsx
- carousel.tsx
- server.ts
- __root.tsx
- chart.tsx
- context-menu.tsx
- dropdown-menu.tsx
- alert-dialog.tsx
- sheet.tsx
- table.tsx
- breadcrumb.tsx
- drawer.tsx
- navigation-menu.tsx
- select.tsx
- react
- card.tsx
- toggle-group.tsx
- input-otp.tsx
- alert.tsx
- sonner.tsx
- avatar.tsx
- badge.tsx
- tabs.tsx
- upload.js
- Graphify Rules
- sheet.tsx
- react
- skeleton.tsx
- tooltip.tsx
- vite-env.d.ts
- Lovable Integration
- Route
- input.tsx
- badge.tsx
- tabs.tsx
- separator.tsx
- sitemap[.]xml.ts
- upload_new.mjs
- Route

## God Nodes (most connected - your core abstractions)
1. `cn()` - 69 edges
2. `FileRoutesByPath` - 23 edges
3. `Footer()` - 21 edges
4. `Nav()` - 21 edges
5. `wa()` - 20 edges
6. `FloatingWhatsApp()` - 18 edges
7. `App` - 17 edges
8. `compilerOptions` - 17 edges
9. `Reveal()` - 16 edges
10. `react` - 13 edges

## Surprising Connections (you probably didn't know these)
- `useChart()` --references--> `react`  [EXTRACTED]
  src/components/ui/chart.tsx → package.json
- `useFormField()` --references--> `react`  [EXTRACTED]
  src/components/ui/form.tsx → package.json
- `CalendarDayButton()` --references--> `react`  [EXTRACTED]
  src/components/ui/calendar.tsx → package.json
- `useCarousel()` --references--> `react`  [EXTRACTED]
  src/components/ui/carousel.tsx → package.json
- `useSidebar()` --references--> `react`  [EXTRACTED]
  src/components/ui/sidebar.tsx → package.json

## Import Cycles
- None detected.

## Communities (56 total, 10 thin omitted)

### Community 0 - "Layout and Navigation Components"
Cohesion: 0.07
Nodes (28): BridalImage, img466970, img466972, img466976, img467144, img467336, img474873, img475175 (+20 more)

### Community 1 - "Frontend Dependencies"
Cohesion: 0.04
Nodes (55): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, framer-motion, gsap (+47 more)

### Community 2 - "Routing and Sitemap Logic"
Cohesion: 0.07
Nodes (29): AboutRoute, AcademyLookAndLearnRoute, AcademyMasterclassRoute, AcademyOneOnOneRoute, AcademyRoute, AcademyRouteChildren, AcademyRouteWithChildren, AcademyTwoMonthProfessionalRoute (+21 more)

### Community 3 - "Project Configuration and Linting"
Cohesion: 0.06
Nodes (30): devDependencies, cloudinary, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+22 more)

### Community 4 - "Sidebar Component"
Cohesion: 0.05
Nodes (39): Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay (+31 more)

### Community 5 - "Interactive UI Components"
Cohesion: 0.10
Nodes (11): Checkbox, HoverCardContent, PopoverContent, Progress, RadioGroup, RadioGroupItem, ScrollArea, ScrollBar (+3 more)

### Community 6 - "Core UI Elements"
Cohesion: 0.24
Nodes (11): Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem, PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious() (+3 more)

### Community 7 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+11 more)

### Community 8 - "Project Structure Configuration"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 9 - "Command and Dialog Components"
Cohesion: 0.12
Nodes (14): Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut() (+6 more)

### Community 10 - "menubar.tsx"
Cohesion: 0.12
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 11 - "form.tsx"
Cohesion: 0.14
Nodes (12): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+4 more)

### Community 12 - "carousel.tsx"
Cohesion: 0.15
Nodes (12): Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext, CarouselOptions (+4 more)

### Community 13 - "server.ts"
Cohesion: 0.29
Nodes (7): consumeLastCapturedError(), renderErrorPage(), fetch(), getServerEntry(), normalizeCatastrophicSsrResponse(), ServerEntry, errorMiddleware

### Community 14 - "__root.tsx"
Cohesion: 0.24
Nodes (5): LovableErrorOptions, LovableEvents, reportLovableError(), Window, ErrorComponent()

### Community 15 - "chart.tsx"
Cohesion: 0.10
Nodes (19): AUDIT REPORT - Phase 2B, AUTONOMOUS DEVELOPMENT WORKFLOW, DESIGN SYSTEM, DEVELOPMENT LOG, GIT CONVENTION, GKP ARTISTRY & MAKEOVERS — AUTONOMOUS DEVELOPMENT PLAN, INFORMATION ARCHITECTURE, KNOWN ISSUES (+11 more)

### Community 16 - "context-menu.tsx"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 17 - "dropdown-menu.tsx"
Cohesion: 0.09
Nodes (33): LLMS.txt, FloatingWhatsApp(), Footer(), links, Nav(), Reveal(), FOUNDER, TRADITIONAL (+25 more)

### Community 18 - "alert-dialog.tsx"
Cohesion: 0.17
Nodes (13): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle (+5 more)

### Community 19 - "sheet.tsx"
Cohesion: 0.10
Nodes (20): Route, Route, Route, Route, Route, Route, Route, Route (+12 more)

### Community 20 - "table.tsx"
Cohesion: 0.22
Nodes (8): Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow

### Community 21 - "breadcrumb.tsx"
Cohesion: 0.25
Nodes (7): Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 22 - "drawer.tsx"
Cohesion: 0.25
Nodes (6): DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 23 - "navigation-menu.tsx"
Cohesion: 0.25
Nodes (7): NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 24 - "select.tsx"
Cohesion: 0.25
Nodes (7): SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 25 - "react"
Cohesion: 0.17
Nodes (7): ALL_PORTFOLIO, DESTINATION, EDITORIAL, ENGAGEMENT, CITIES, FILTERS, Route

### Community 26 - "card.tsx"
Cohesion: 0.29
Nodes (6): Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle

### Community 27 - "toggle-group.tsx"
Cohesion: 0.33
Nodes (5): ToggleGroup, ToggleGroupContext, ToggleGroupItem, Toggle, toggleVariants

### Community 28 - "input-otp.tsx"
Cohesion: 0.33
Nodes (5): input-otp, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 29 - "alert.tsx"
Cohesion: 0.40
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 31 - "avatar.tsx"
Cohesion: 0.50
Nodes (3): Avatar, AvatarFallback, AvatarImage

### Community 32 - "badge.tsx"
Cohesion: 0.09
Nodes (14): App, autoBind(), CircularGallery(), createTextTexture(), debounce(), deriveFontFamilyFromUrl(), getFontSize(), lerp() (+6 more)

### Community 33 - "tabs.tsx"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 36 - "sheet.tsx"
Cohesion: 0.18
Nodes (8): ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartTooltipContent, THEMES, useChart()

### Community 37 - "react"
Cohesion: 0.22
Nodes (9): react, useCarousel(), useSidebar(), AboutPage(), About(), Academy(), Hero(), PortfolioPreview() (+1 more)

### Community 46 - "Route"
Cohesion: 0.70
Nodes (4): Masonry(), preloadImages(), useMeasure(), useMedia()

### Community 48 - "input.tsx"
Cohesion: 0.40
Nodes (4): getRouter(), Register, routeTree, startInstance

### Community 49 - "badge.tsx"
Cohesion: 0.67
Nodes (3): Badge(), BadgeProps, badgeVariants

### Community 50 - "tabs.tsx"
Cohesion: 0.50
Nodes (3): TabsContent, TabsList, TabsTrigger

### Community 51 - "separator.tsx"
Cohesion: 0.50
Nodes (3): AccordionContent, AccordionItem, AccordionTrigger

## Knowledge Gaps
- **400 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `css` (+395 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `react` to `Frontend Dependencies`, `sheet.tsx`, `Sidebar Component`, `form.tsx`, `alert-dialog.tsx`?**
  _High betweenness centrality (0.374) - this node is a cross-community bridge._
- **Why does `cn()` connect `Core UI Elements` to `Sidebar Component`, `Interactive UI Components`, `Command and Dialog Components`, `menubar.tsx`, `form.tsx`, `carousel.tsx`, `context-menu.tsx`, `alert-dialog.tsx`, `table.tsx`, `breadcrumb.tsx`, `drawer.tsx`, `navigation-menu.tsx`, `select.tsx`, `card.tsx`, `toggle-group.tsx`, `input-otp.tsx`, `alert.tsx`, `avatar.tsx`, `tabs.tsx`, `sheet.tsx`, `badge.tsx`, `tabs.tsx`, `separator.tsx`?**
  _High betweenness centrality (0.289) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Frontend Dependencies` to `Project Configuration and Linting`, `input-otp.tsx`, `react`, `sonner.tsx`?**
  _High betweenness centrality (0.197) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _400 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Layout and Navigation Components` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `Frontend Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03636363636363636 - nodes in this community are weakly interconnected._
- **Should `Routing and Sitemap Logic` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._