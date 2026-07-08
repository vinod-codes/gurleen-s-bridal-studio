# Graph Report - gurleen-s-bridal-studio  (2026-07-08)

## Corpus Check
- 110 files · ~31,431 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 629 nodes · 995 edges · 48 communities (38 shown, 10 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.54)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8b030119`
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
- input.tsx
- separator.tsx
- skeleton.tsx
- tooltip.tsx
- vite-env.d.ts
- Lovable Integration
- Route

## God Nodes (most connected - your core abstractions)
1. `cn()` - 69 edges
2. `GURLEEN KAUR PANNU — WEBSITE PROJECT BLUEPRINT` - 24 edges
3. `FileRoutesByPath` - 22 edges
4. `Footer()` - 20 edges
5. `Nav()` - 20 edges
6. `wa()` - 19 edges
7. `FloatingWhatsApp()` - 18 edges
8. `compilerOptions` - 17 edges
9. `Reveal()` - 15 edges
10. `TRADITIONAL` - 11 edges

## Surprising Connections (you probably didn't know these)
- `CalendarDayButton()` --references--> `react`  [EXTRACTED]
  src/components/ui/calendar.tsx → package.json
- `useCarousel()` --references--> `react`  [EXTRACTED]
  src/components/ui/carousel.tsx → package.json
- `useChart()` --references--> `react`  [EXTRACTED]
  src/components/ui/chart.tsx → package.json
- `useFormField()` --references--> `react`  [EXTRACTED]
  src/components/ui/form.tsx → package.json
- `useSidebar()` --references--> `react`  [EXTRACTED]
  src/components/ui/sidebar.tsx → package.json

## Import Cycles
- None detected.

## Communities (48 total, 10 thin omitted)

### Community 0 - "Layout and Navigation Components"
Cohesion: 0.05
Nodes (53): LLMS.txt, FloatingWhatsApp(), Footer(), links, Nav(), Reveal(), ALL_PORTFOLIO, BridalImage (+45 more)

### Community 1 - "Frontend Dependencies"
Cohesion: 0.04
Nodes (51): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, framer-motion, @hookform/resolvers (+43 more)

### Community 2 - "Routing and Sitemap Logic"
Cohesion: 0.07
Nodes (28): AboutRoute, AcademyLookAndLearnRoute, AcademyMasterclassRoute, AcademyRoute, AcademyRouteChildren, AcademyRouteWithChildren, AcademyTwoMonthProfessionalRoute, BridalRoute (+20 more)

### Community 3 - "Project Configuration and Linting"
Cohesion: 0.06
Nodes (30): devDependencies, cloudinary, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+22 more)

### Community 4 - "Sidebar Component"
Cohesion: 0.05
Nodes (38): Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay (+30 more)

### Community 5 - "Interactive UI Components"
Cohesion: 0.09
Nodes (13): Badge(), BadgeProps, badgeVariants, Checkbox, HoverCardContent, PopoverContent, Progress, Slider (+5 more)

### Community 6 - "Core UI Elements"
Cohesion: 0.17
Nodes (17): Button, ButtonProps, buttonVariants, Calendar(), CalendarDayButton(), Pagination(), PaginationContent, PaginationEllipsis() (+9 more)

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
Cohesion: 0.15
Nodes (11): FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext, FormItemContextValue, FormLabel (+3 more)

### Community 12 - "carousel.tsx"
Cohesion: 0.07
Nodes (24): react, Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext (+16 more)

### Community 13 - "server.ts"
Cohesion: 0.29
Nodes (7): consumeLastCapturedError(), renderErrorPage(), fetch(), getServerEntry(), normalizeCatastrophicSsrResponse(), ServerEntry, errorMiddleware

### Community 14 - "__root.tsx"
Cohesion: 0.24
Nodes (5): LovableErrorOptions, LovableEvents, reportLovableError(), Window, ErrorComponent()

### Community 15 - "chart.tsx"
Cohesion: 0.08
Nodes (24): Animation System, Business Overview, Client Deliverables, Client Responsibilities, Competitor Analysis, Content Strategy, Customer Journey, Design System (+16 more)

### Community 16 - "context-menu.tsx"
Cohesion: 0.20
Nodes (9): ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut(), ContextMenuSubContent (+1 more)

### Community 17 - "dropdown-menu.tsx"
Cohesion: 0.20
Nodes (9): DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut(), DropdownMenuSubContent (+1 more)

### Community 18 - "alert-dialog.tsx"
Cohesion: 0.22
Nodes (8): AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader(), AlertDialogOverlay, AlertDialogTitle

### Community 19 - "sheet.tsx"
Cohesion: 0.11
Nodes (19): Route, Route, Route, Route, Route, Route, Route, Route (+11 more)

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
Cohesion: 0.40
Nodes (4): getRouter(), Register, routeTree, startInstance

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
Cohesion: 0.50
Nodes (3): AccordionContent, AccordionItem, AccordionTrigger

### Community 33 - "tabs.tsx"
Cohesion: 0.50
Nodes (3): TODO: replace with your project URL once a project name or custom domain is set., Route, SitemapEntry

## Knowledge Gaps
- **387 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `css` (+382 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `cn()` connect `Core UI Elements` to `Sidebar Component`, `Interactive UI Components`, `Command and Dialog Components`, `menubar.tsx`, `form.tsx`, `carousel.tsx`, `context-menu.tsx`, `dropdown-menu.tsx`, `alert-dialog.tsx`, `table.tsx`, `breadcrumb.tsx`, `drawer.tsx`, `navigation-menu.tsx`, `select.tsx`, `card.tsx`, `toggle-group.tsx`, `input-otp.tsx`, `alert.tsx`, `avatar.tsx`, `badge.tsx`, `input.tsx`, `separator.tsx`?**
  _High betweenness centrality (0.158) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Frontend Dependencies` to `Project Configuration and Linting`, `input-otp.tsx`, `carousel.tsx`, `sonner.tsx`?**
  _High betweenness centrality (0.134) - this node is a cross-community bridge._
- **Why does `react` connect `carousel.tsx` to `Frontend Dependencies`, `Sidebar Component`, `Core UI Elements`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _388 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Layout and Navigation Components` be split into smaller, more focused modules?**
  _Cohesion score 0.05408805031446541 - nodes in this community are weakly interconnected._
- **Should `Frontend Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.0392156862745098 - nodes in this community are weakly interconnected._
- **Should `Routing and Sitemap Logic` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._